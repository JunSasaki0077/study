import Image from "next/image";
import Link from "next/link";

export default function Logo({
  type,
  justifyContent,
  colorTheme,
  size,
}: {
  justifyContent: string;
  type?: "iconAndText";
  colorTheme?: "light" | "dark";
  size?: "lg";
}) {
  return (
    <div className={`${justifyContent}  flex items-center gap-2`}>
      {type === "iconAndText" && (
        <h3
          className={`${
            colorTheme === "light" ? "text-white" : "text-gray-900"
          } tracking-loose mb-0 pb-0 font-bold ${
            size === "lg" ? "text-3xl" : "text-2xl"
          }`}
        >
          Sauna SNS
        </h3>
      )}
      <Image width={30} height={60} src="/top-icon.jpg" alt="sauna" />
    </div>
  );
}
