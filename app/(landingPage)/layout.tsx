import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      {/* Navabar */}
      <Navbar />
      <main className="pt-24 pb-20 bg-slate-100">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingLayout;
