import "./globals.css";

export const metadata = {
  title: "Kala Travel",
  description: "Agencia de viajes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}