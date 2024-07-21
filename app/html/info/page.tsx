import Image from "next/image";

export default function Page(){
 return(
  <main className="mx-auto w-11/12 md:w-1/2 mt-20 text-lg font-poppins flex flex-col gap-10 items-center border border-black p-10">
   <span className="font-cormorantGaramond text-5xl">
    Minipedia
   </span>
   <p className="mb-5">Pequeño Blog Minimalista creado con motivos de práctica.</p>
   <Image alt="imagen" width={100} height={100} src={"/imagenes/8crow.png"}/>
  </main>
 )
}
