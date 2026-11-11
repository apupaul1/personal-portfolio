import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import AuroraBackground from '../components/ui/AuroraBackground';
import ScrollProgress from '../components/ui/ScrollProgress';
import CursorGlow from '../components/ui/CursorGlow';
import ScrollToTop from '../components/ui/ScrollToTop';
import PageTransition from '../components/ui/PageTransition';

const RootLayout = () => {
    return (
        <div className="relative min-h-screen">
            <AuroraBackground />
            <ScrollProgress />
            <CursorGlow />
            <ScrollToTop />

            <div className="relative z-10 flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">
                    <PageTransition>
                        <Outlet />
                    </PageTransition>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default RootLayout;
