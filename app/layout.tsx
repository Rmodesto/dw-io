import { roboto } from '@/app/ui/fonts';
import '@/app/ui/global.css';
import { AuthProvider } from '@/app/utils/authStateListener';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className={`${roboto.className} antialiased`}>{children}</body>
      </html>
    </AuthProvider>
  );
}
