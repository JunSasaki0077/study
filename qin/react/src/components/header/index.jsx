import Link from "next/link";

const NAV_ITEMS = [
  { herf: "/", label: "Index" },
  { herf: "/posts", label: "Posts" },
  { herf: "/users", label: "Users" },
  { herf: "/comments", label: "Comments" },
];

export const Header = () => {
  return (
    <header className="flex justify-center items-center border-b w-full h-24 mb-4">
      {NAV_ITEMS.map((item) => (
        <Link
          href={item.herf}
          key={item.label}
          className="inline-block py-2 px-6 text-xl hover:text-blue-500 active:text-blue-500 forcus:text-blue-500 "
        >
          {item.label}
        </Link>
      ))}
    </header>
  );
};
