import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Huba Ferencz | Front-end Engineer",
  description:
    "I'm a Front-end Engineer who really enjoys bringing cool ideas to life as awesome web apps. The process of designing, coding, testing, and launching projects that genuinely make a difference to people—that's what I'm all about.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} bg-white text-white dark:bg-black`}
      >
        {children}
        <Toaster
          toastOptions={{
            style: {
              padding: "10px",
              color: "#1C1C1E",
              background: "#A6FE05",
              fontWeight: "600",
              fontSize: "20px",
              borderRadius: "24px",
            },
          }}
        />
      </body>
    </html>
  );
}
