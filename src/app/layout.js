import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata = {
  title: "The Steadfast | A Private Archive",
  description: "An interactive gallery dedicated to a steadfast friend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased text-[#F9F7F2]`}
        style={{ 
          /* A deep, luxurious plum gradient fading to almost black */
          background: "radial-gradient(circle at 50% 0%, #2D1B33 0%, #160D1A 60%, #0B060D 100%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
      >
        {/* The Film Grain - Adjusted to look like starlight/texture on a dark wall */}
        <div 
          className="fixed inset-0 z-50 pointer-events-none opacity-[0.06]"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }}
        ></div>

        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}