import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
import Logo from "./ui/logo";

export default function Home() {
  return (
    <div className="relative isolate flex min-h-[100vh] flex-col items-center justify-center overflow-hidden bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-1 flex-col items-center gap-2 px-6 pt-10 pb-24 sm:pb-32 md:flex-row lg:flex lg:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <Logo justifyContent="justify-start" type="iconAndText" size="lg" />
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            サウナ管理アプリ
          </h1>

          <div className="mt-10 flex items-center gap-x-6">
            <Button appearance="primary" size="md">
              <Link href="/auth/sign-up">アカウント作成</Link>
            </Button>
            <Link href="/auth/sign-in">
              <Button appearance="secondary" size="md">
                ログイン
              </Button>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/public/top.jpg"
                alt="QuickSend editor"
                className="w-[60rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                width={1000}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
