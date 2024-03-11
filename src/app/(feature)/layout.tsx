import NavbarComponent from "@/app/(feature)/components/Navbar";

export default function FeatureLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-slate-100 min-h-screen">
      <NavbarComponent />
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-36 container mt-4">
        {children}
      </div>
    </div>
  );
}
