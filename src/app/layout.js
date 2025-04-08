import './globals.css';
import HeaderTop from '@/component/HeaderTop';
import HeaderStick from '@/component/HeaderStick';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <HeaderTop />
        <HeaderStick />
        {children}
      </body>
    </html>
  );
}
