import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Inkblot Book Club",
  description: "Join our book club where we read between the lines.",
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
