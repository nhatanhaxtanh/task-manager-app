import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout() {
  return (
    <div className="min-h-screen text-gray-900 flex flex-col">
      <header className="sticky top-0 z-50 shadow-md bg-white">
        <Header />
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}