import NavbarComponent from "@/components/Navbar";

export default function FeatureLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarComponent />
      <div>{children}</div>
    </>
  );
}
