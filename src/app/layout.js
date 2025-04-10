import './globals.css';
import HeaderTop from '@/component/HeaderTop';
import HeaderStick from '@/component/HeaderStick';
import Footer from '@/component/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <HeaderTop />
        <HeaderStick />
        {children}
        <Footer />
      </body>
    </html>
  );
}
