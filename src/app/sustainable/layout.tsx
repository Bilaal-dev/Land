import Nav from "../_components/Nav";

export default function SustainableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
} 