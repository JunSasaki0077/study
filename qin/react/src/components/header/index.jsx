import Link from "next/link";

const NAV_ITEMS = [
  { herf: "/posts", label: "Posts" },
  { herf: "/About", label: "About" },
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
