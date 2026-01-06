import "./globals.css";

export const metadata = {
  title: "Giovanni - Full Stack Web Developer",
  description: "Trasformo idee in esperienze digitali. Specializzato in React, JavaScript e Node.js, creo applicazioni web moderne e performanti.",
  keywords: "Full Stack Web Developer, React, JavaScript, Node.js, Portfolio",
  authors: [{ name: "Giovanni" }],
  openGraph: {
    title: "Giovanni - Full Stack Web Developer",
    description: "Trasformo idee in esperienze digitali. Specializzato in React, JavaScript e Node.js, creo applicazioni web moderne e performanti.",
    type: "website",
    images: [""],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      <body>{children}</body>
    </html>
  );
}
