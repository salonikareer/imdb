import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Provider from "./provider";
import Navbar from "./components/navbar";
// import Results from "./components/results";
import Searchbox from "./components/searchbox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie App",
  description: "Movie Database clone using nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
         <Provider>
         <Header/>
         <Navbar/>
         <Searchbox/>
        {children}
        
         </Provider>
        </body>
    </html>
  );
}
