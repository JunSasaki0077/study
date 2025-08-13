import Login from "@/components/Login";
import Image from "next/image";
import heroImage from "@/public/hero-img.jpeg"

export default function Home() {
  return (
    <main id="hero">
			<div className="hero-img">
           <Image alt="hero-img" src={heroImage} />
			</div>
			<div className="hero-login">
			<Login/>
			</div>
		</main>
  );
}
