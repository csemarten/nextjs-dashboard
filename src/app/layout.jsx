import '@/app/ui/global.css'; // Import global styles
import { inter } from '@/app/ui/fonts'; // Import the Inter font

export default function RootLayout({children}) {
    console.log(inter);
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
              {children}
            </body>
        </html>
    );
}