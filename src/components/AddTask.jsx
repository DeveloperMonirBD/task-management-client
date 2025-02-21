import axios from 'axios';
import { IoMdAddCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddTask = () => {
    const navigate = useNavigate();

    const handleAddTask = async e => {
        e.preventDefault();

        const form = e.target;
        const Title = form.taskTitle.value;
        const Description = form.description.value;
        const Category = form.category.value;

        if (!Title.trim()) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Title is required!',
                showConfirmButton: false,
                timer: 3000
            });
            return; // Stop further execution
        }

        try {
            const taskData = {
                Title,
                Description,
                TimeStamp: new Date().toISOString(),
                Category
            };

            console.log(taskData);

            const response = await axios.post(`${import.meta.env.VITE_API_URL}/tasks`, taskData);

            if (response.data.insertedId) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${Title} is successfully added`,
                    showConfirmButton: false,
                    timer: 3000
                });
                navigate('/');
            }
        } catch (error) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: error.response?.data?.message || error.message || 'Something went wrong',
                showConfirmButton: false,
                timer: 3000
            });
        }
    };
    
    return (
        <div className="hero pt-20 pb-16">
            <div className="lg:w-3/5 w-11/12 mx-auto flex-col">
                <div className="text-center pb-5">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">Add New Task</h1>
                </div>

                <div className="bg-base-100/80 shrink-0 shadow-md rounded-md">
                    <form onSubmit={handleAddTask} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">
                                <span className="font-bold">Task Title</span>
                            </label>
                            <input type="text" name="taskTitle" pattern="^[A-Za-z\s]*$" placeholder="Write the task name" className="input w-full font-medium" required />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="fieldset-label">
                                <span className="font-bold">Task Description</span>
                            </label>
                            <textarea name="description" placeholder="Task Description" className="textarea w-full font-medium" required />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="fieldset-label">
                                <span className="font-bold">Task Category</span>
                            </label>

                            <select name="category" className="select select-info cursor-pointer p-2 mb-2">
                                <option defaultValue={'Select Category'} disabled>
                                    Select Category
                                </option>
                                <option value="To-Do">To-Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Done">Done</option>
                            </select>
                        </fieldset>

                        <div className="mt-1 lg:w-1/4 md:w-2/5 w-11/12">
                            <button className="btn bg-indigo-500 border-none text-white/90 hover:bg-indigo-700 font-bold rounded-md flex gap-1 items-center">
                                <span className="text-lg">Add Task</span>
                                <IoMdAddCircle className="text-xl" />{' '}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;
