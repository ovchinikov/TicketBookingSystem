import "@styles/globals.css";
import { Roboto } from "next/font/google";

const fontFamily = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Billet d'avion",
  description: "Nous vendons des billets",
  visualViewport: "width=device-width, initial-scale=1.0",
  charset: "utf-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`bg-white ${fontFamily.className}`}>
      <body className="bg-white h-full">{children}</body>
    </html>
  );
}
