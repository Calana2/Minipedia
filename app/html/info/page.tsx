import Image from "next/image";

export default function Page(){
 return(
  <main className="mx-auto w-11/12 md:w-1/2 mt-20 text-lg font-poppins">
   <p className="mb-5">Pequeño Blog Minimalista creado con motivos de práctica.</p>
   <Image alt="imagen" width={200} height={200} src={"/imagenes/gopher.png"}/>
  </main>
 )
}
