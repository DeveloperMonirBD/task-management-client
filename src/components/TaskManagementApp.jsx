import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const TaskManagementApp = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ Title: '', Description: '', Category: 'To-Do' });
    const [isLoading, setIsLoading] = useState(false); // Loading state

    // Fetch tasks from the backend on component mount
    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {

            const response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
            console.log('Fetched tasks:', response.data); // Debugging
            const data = Array.isArray(response.data) ? response.data : []; // Ensure data is an array
            setTasks(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleAddTask = async e => {
        e.preventDefault();
        setIsLoading(true); // Start loading

        if (!newTask.Title.trim()) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Title is required!',
                showConfirmButton: false,
                timer: 3000
            });
            setIsLoading(false); // Stop loading
            return; // Stop further execution
        }

        try {
            const taskData = {
                ...newTask,
                TimeStamp: new Date().toISOString()
            };

            const response = await axios.post(`${import.meta.env.VITE_API_URL}/tasks`, taskData);

            if (response.data.insertedId) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${newTask.Title} is successfully added`,
                    showConfirmButton: false,
                    timer: 3000
                });
                setTasks([...tasks, { ...taskData, _id: response.data.insertedId }]);
                setNewTask({ Title: '', Description: '', Category: 'To-Do' }); // Reset form
            }
        } catch (error) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: error.response?.data?.message || error.message || 'Something went wrong',
                showConfirmButton: false,
                timer: 3000
            });
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    const handleUpdateTask = async (id, updatedTask) => {
        try {
            await axios.patch(`/api/tasks/${id}`, updatedTask);
            const updatedTasks = tasks.map(task => (task._id === id ? { ...task, ...updatedTask } : task));
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleDeleteTask = async id => {
        try {
            await axios.delete(`/api/tasks/${id}`);
            const updatedTasks = tasks.filter(task => task._id !== id);
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleDragStart = (e, taskId) => {
        e.dataTransfer.setData('taskId', taskId);
    };

    const handleDrop = async (e, targetCategory) => {
        const taskId = e.dataTransfer.getData('taskId');
        const task = tasks.find(t => t._id === taskId);
        if (task.Category !== targetCategory) {
            await handleUpdateTask(taskId, { Category: targetCategory });
        }
    };

    const handleReorder = async (taskId, newIndex, category) => {
        const updatedTasks = tasks.filter(t => t.Category === category).sort((a, b) => a.order - b.order);
        const task = updatedTasks.find(t => t._id === taskId);
        updatedTasks.splice(updatedTasks.indexOf(task), 1);
        updatedTasks.splice(newIndex, 0, task);
        const reorderedTasks = updatedTasks.map((t, index) => ({
            ...t,
            order: index
        }));
        await Promise.all(reorderedTasks.map(t => axios.patch(`/api/tasks/${t._id}`, { order: t.order })));
        fetchTasks(); // Refresh tasks after reordering
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Task Management</h1>
            <div className="max-w-4xl mx-auto">
                {/* Add Task Form */}
                <form onSubmit={handleAddTask} className="bg-white p-4 rounded-lg shadow mb-8">
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={newTask.Title}
                        onChange={e => setNewTask({ ...newTask, Title: e.target.value })}
                        className="w-full p-2 mb-2 border rounded"
                        maxLength={50}
                        required
                    />
                    <textarea
                        placeholder="Task Description"
                        value={newTask.Description}
                        onChange={e => setNewTask({ ...newTask, Description: e.target.value })}
                        className="w-full p-2 mb-2 border rounded"
                        maxLength={200}
                    />
                    <select value={newTask.Category} onChange={e => setNewTask({ ...newTask, Category: e.target.value })} className="w-full p-2 mb-2 border rounded" required>
                        <option value="To-Do">To-Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                    <button type="submit" disabled={isLoading} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300">
                        {isLoading ? 'Adding...' : 'Add Task'}
                    </button>
                </form>

                {/* Task Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['To-Do', 'In Progress', 'Done'].map(category => (
                        <div key={category} onDrop={e => handleDrop(e, category)} onDragOver={e => e.preventDefault()} className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">{category}</h2>
                            {Array.isArray(tasks) &&
                                tasks
                                    .filter(task => task.Category === category)
                                    .map(task => (
                                        <div key={task._id} draggable onDragStart={e => handleDragStart(e, task._id)} className="p-4 mb-4 border rounded-lg bg-gray-50">
                                            <h3 className="font-bold">{task.Title}</h3>
                                            <p className="text-sm text-gray-600">{task.Description}</p>
                                            <p className="text-xs text-gray-400">{new Date(task.TimeStamp).toLocaleString()}</p>
                                            <div className="mt-2 flex space-x-2">
                                                <button
                                                    onClick={() =>
                                                        handleUpdateTask(task._id, {
                                                            Title: prompt('Edit Title', task.Title)
                                                        })
                                                    }
                                                    className="text-sm text-blue-500 hover:text-blue-700">
                                                    Edit
                                                </button>
                                                <button onClick={() => handleDeleteTask(task._id)} className="text-sm text-red-500 hover:text-red-700">
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskManagementApp;
