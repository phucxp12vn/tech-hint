import Nav from "@/components/Nav";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main>
            <Nav />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
