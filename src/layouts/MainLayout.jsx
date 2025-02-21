import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className="font-poppins">
            <Toaster position="top-right" reverseOrder={false} />
            <header className="sticky top-0  bg-[#0F766E] shadow-sm z-10">
                {/* Navbar */}
                <Navbar />
            </header>

            <main className="bg-neutralSilver">
                {/* Dynamic Section  */}
                <div className="min-h-[calc(100vh-232px)] px-3">
                    <Outlet />
                </div>
            </main>

            <footer>
                {/* Footer  */}
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;
