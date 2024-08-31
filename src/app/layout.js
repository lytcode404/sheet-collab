import { Inter, Poppins, Merriweather } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const ClientOnly = dynamic(
  () => import("@/components/Wrappers/ClientSideOnly"),
  { ssr: false }
);

export const metadata = {
  title: "PinWheel",
  description: "A scalable collaborative spreadsheet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&display=swap"
        rel="stylesheet"
      />
      <body className={`${poppins.className} ${merriweather.className}`}>
        <ClientOnly>{children}</ClientOnly>
      </body>
    </html>
  );
}
