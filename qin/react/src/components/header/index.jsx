import Link from "next/link";

const NAV_ITEMS = [
  { herf: "/", label: "Index" },
  { herf: "/posts", label: "Posts" },
  { herf: "/users", label: "Users" },
  { herf: "/comments", label: "Comments" },
];

export const Header = () => {
  return (
    <header>
      {NAV_ITEMS.map((item) => (
        <Link href={item.herf}>{item.label}</Link>
      ))}
    </header>
  );
};
