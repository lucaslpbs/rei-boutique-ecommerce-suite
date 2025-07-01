
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatButton from './ChatButton';
import WelcomePopup from './WelcomePopup';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatButton />
      <WelcomePopup />
    </div>
  );
};

export default Layout;
