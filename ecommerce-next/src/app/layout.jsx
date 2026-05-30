import "./globals.css";

export const metadata = {
  title: "Ecommerce Next",
  description: "Ecommerce application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
