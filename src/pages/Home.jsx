import AddTask from "../components/AddTask";

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <header className="text-center text-2xl font-bold my-5">Task Management System</header>
            <AddTask />
        </div>
    );
};

export default Home;