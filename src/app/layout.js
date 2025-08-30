import "./globals.css";

export const metadata = {
  title: "admin-pannel",
  description: "This is admin pannel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
