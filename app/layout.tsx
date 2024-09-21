import type {Metadata} from "next"
import { Cormorant_Garamond, Poppins } from "next/font/google"
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
 subsets: ["latin"],
 variable: "--font-cormorant-garamond",
 weight: ["400"]
})

const poppins = Poppins({
 subsets: ["latin"],
 variable: "--font-poppins",
 weight: ["400","600"]
})


export const metadata: Metadata = {
  title: "Minipedia, Calana's Blog",
  description: "A simple blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${cormorantGaramond.variable} ${poppins.variable} text-white`}
       style={{backgroundColor:"#202020"}}
      >
      {children}
      </body>
    </html>
  );
}
