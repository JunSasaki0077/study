import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-200">
      <nav className="flex gap-x-8">
        <Link href="/dashboard/settings">設定トップ</Link>
        <Link href="/dashboard/settings/member">メンバー管理</Link>
        <Link href="/dashboard/settings/account" className="ml-auto">
          アカウント管理
        </Link>
      </nav>

      <div className=" py-10">{children}</div>
    </div>
  );
}
