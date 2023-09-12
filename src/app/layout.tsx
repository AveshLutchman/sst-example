import { type ReactNode } from "react";
import NavBar from "./navBar";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function RootLayout({ children, modal }: Props) {
  return (
    <html lang="en">
        <body id="app">
          <NavBar />
          <main className="min-h-[87vh] w-full flex flex-row bg-white">
            {children}
            {modal}
          </main>
        </body>
    </html>
  );
}
