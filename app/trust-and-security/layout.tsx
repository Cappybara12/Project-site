import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";

export default function TrustAndSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

