import "./globals.css";

export const metadata = {
  title: "EAT PUNJAB - Authentic Punjabi Restaurant | Ff 102, Bodakdev, Ahmedabad",
  description: "Authentic Punjabi cuisine at Ff 102, Bodakdev. Fresh tandoor naans, butter chicken, dal makhani. Opposite Himalaya Mall. Order now: 099245 03837",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
