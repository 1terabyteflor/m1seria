import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div 
      className="w-full h-screen p-4 " 
      style={{ backgroundImage: "url('/IMG_6589.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >

      <p className="font-bold self-start text-xl md:text-2xl cursor-default">m1seria</p>

      <div className=" p-4  self-center lg:mt-8 flex flex-col items-center justify-center">
        <div className="bg-white shadow-lg p-4 flex-grow w-fit flex flex-col justify-center items-center">
          <Image 
            src="/rojo.jpeg"
            alt="m2seria"
            width={300}
            height={225}
            className="object-cover"
          />
          <p className="font-bold mt-2 text-lg md:text-xl">M2SERIA</p>
          <p className="text-md md:text-lg">$ 22.222</p>
          <p className="text-xs text-center">
libro de 15x15cm <br></br>
3OO páginas de am0r <br></br>
retiros x caba <br></br>
envíos a todo el país</p>
          <Link href="https://mpago.la/2y6CtbD" className="border border-black font-[family-name:var(--einaBold)] w-[300px] h-fit py-2 flex items-center justify-center text-center mt-2 cursor-pointer hover:bg-black hover:border-black hover:text-white">
            comprar
          </Link>
        </div>
      </div>
      <div className="flex gap-x-4 justify-end fixed bottom-0 w-full p-4">
        <p className="font-bold cursor-default text-sm md:text-base">contacto</p>
        <Link href="mailto:m1seriaw@gmail.com" className="text-sm md:text-base hover:underline">mail</Link>
        <Link href="https://www.instagram.com/m1seria" className="text-sm md:text-base hover:underline">instagram</Link>
      </div>
    </div>
  );
}
