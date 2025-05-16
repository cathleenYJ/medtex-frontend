import { Header } from "@/components/header/header";

export default function UserAdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      <div className="pt-32">{children}</div>
    </div>
  );
}
