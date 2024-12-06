import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen p-4  flex flex-col justify-between items-center">
      <p className="font-bold self-start text-lg md:text-2xl">m1seria</p>
      <div className="flex-grow w-full flex flex-col justify-center items-center">
        <Image 
          src="/rojo.jpeg"
          alt="M1SERIA"
          width={300}
          height={225}
          className="object-cover"
        />
        <p className="font-bold mt-2 text-lg md:text-xl">M1SERIA V2</p>
        <p className="text-md md:text-lg">$ xxx</p>
        <p className="border h-fit border-black font-[family-name:var(--einaBold)] px-4 py-2 text-center mt-2 cursor-pointer hover:bg-black hover:border-black hover:text-white">
          comprar
        </p>
      </div>
      <div className="flex gap-x-4 justify-end fixed bottom-0 w-full p-4">
        <p className="font-bold cursor-default text-sm md:text-base">contacto</p>
        <Link href="mailto:m1seriaw@gmail.com" className="text-sm md:text-base">mail</Link>
        <Link href="https://www.instagram.com/m1seria" className="text-sm md:text-base">instagram</Link>
      </div>
    </div>
  );
}
