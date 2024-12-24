"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Bookmark,
  Heart,
  LayoutDashboard,
  LogIn,
  LogOut,
  UserPlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const Header = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  const pathname = usePathname();
  const menu = [
    {
      name: "Browse",
      link: "/",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Favorites",
      link: "/favorites",
      icon: <Heart size={22} />,
    },
    {
      name: "Saved",
      link: "/bookmarks",
      icon: <Bookmark size={22} />,
    },
  ];

  if (isLoading) return null;
  return (
    <div className="min-h-[10vh] px-16 py-6 w-full bg-white flex justify-between items-center shadow-sm">
      <Link href="/">
        <Image src={"/pokemon--logo.png"} alt="logo" width={120} height={90} />
      </Link>
      <nav>
        <ul className="flex items-center gap-8 text-gray-400">
          {menu.map((item, index: number) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`py-2 px-6 text-sm flex items-center gap-2 font-bold rounded-lg
									${pathname === item.link ? "bg-[#6c5ce7]/15 text-[#6c5ce7]" : ""} `}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {user?.sub && !isLoading && (
        <div>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="outline-none border-none">
              <div className="bg-[#6c5ce7]/15 flex items-center justify-center gap-2 rounded-lg cursor-pointer">
                <span className="pl-2 text-[#6c5ce7] text-sm font-bold">
                  {user?.name || "User"}
                </span>
                <Image
                  src={user?.picture || "/avatar.png"}
                  height={40}
                  width={40}
                  alt="avatar"
                  className="rounded-lg p-1 "
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[160px]">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => router.push("/api/auth/logout")}
              >
                <LogOut size={20} />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
      {!user?.sub && !isLoading && (
        <div className="flex items-center gap-4">
          <Link
            href="/api/auth/login"
            className="py-2 px-6 text-sm flex items-center gap-2 font-bold rounded-lg
					bg-[#6c5ce7]/15 text-[#6c5ce7] hover:bg-[#6c5ce7]/30 transition-all duration-300 ease-in-out
					"
          >
            <LogIn size={20} />
            Login
          </Link>
          <Link
            href="/api/auth/login"
            className="py-2 px-6 text-sm flex items-center gap-2 font-bold rounded-lg
					bg-[#6c5ce7] text-white hover:bg-[#6c5ce7]/90 transition-all duration-300 ease-in-out
					"
          >
            <UserPlus size={20} />
            Register
          </Link>
        </div>
      )}
    </div>
  );
};
export default Header;
