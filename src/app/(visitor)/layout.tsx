import { Header } from "@/components/header/header";

export default function UserAdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="pt-32">
      <Header />
      {children}
    </div>
  );
}
