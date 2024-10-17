import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Logo from "@/public/logo.png";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="min-h-screen w-full grid md:grid-cols-[220px_ifr] lg:grid-cols-[280px_1fr]">
        <div className="hidden md:block border-r bg-muted/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/">
                <Image src={Logo} alt="Logo" className="size-6" />
              </Link>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};
export default DashboardLayout;
