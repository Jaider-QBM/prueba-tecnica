import { montserrat } from "@/components/ui/fonts";
import "./globals.css";

export const metadata = {
  title: "Allintravels",
  description: "Creamos un viaje sensacional para ti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}

      >
        {children}
      </body>
    </html>
  );
}
