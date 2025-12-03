import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import { LoadingScreen } from "../components/common/LoadingScreen";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LoadingScreen>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </LoadingScreen>
  );
}

