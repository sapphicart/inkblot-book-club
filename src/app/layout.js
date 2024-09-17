import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Inkblot Book Club",
  description: "Join our book club where we read between the lines.",
  openGraph: {
      title: "Inkblot Book Club",
      description: "Join our book club where we read between the lines.",
      url: 'https://inkblot-book-club.vercel.app',
      images: [
        {
          url: 'https://inkblot-book-club.vercel.app/cover.png',
          width: 1200,
          height: 630,
          alt: "Cover image for Inkblot Book Club",
        }
      ],
      type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
