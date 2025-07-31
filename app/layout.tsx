// import type { Metadata } from "next";
// import { Providers } from "./providers"; // Import the new component
// import "./globals.css";


 
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }

// in ad-vista-pro-nextjs/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] }); // Initialize the font

export const metadata: Metadata = {
  title: "Ad Vista Pro",
  description: "Lovable Generated Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}> {/* Apply the font class */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}