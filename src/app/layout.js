// app/layout.js (Server Component)
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedLayout from "@/components/AnimatedLayout";

export const metadata = {
  title: "FinWise",
  description: "Empowering your financial future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Header />
        <AnimatedLayout>{children}</AnimatedLayout>
        <Footer />
      </body>
    </html>
  );
}
