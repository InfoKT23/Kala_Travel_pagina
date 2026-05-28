import "./globals.css";
import PageLoader from "../components/PageLoader";

export const metadata = {
  title: "Kala Travel",
  description: "Agencia de viajes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}