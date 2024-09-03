import { getCategorisedArticles } from "@/lib/articles";
import ArticleItemList from "@/components/ArticleListItem"
import Link from "next/link";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export default function Home() {

  const articles = getCategorisedArticles()

  return (
  <main>
   <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
    <header className="font-cormorantGaramond font-light text-6xl text-neutral-900 text-center">
    <h1 className="hidden">Calana&aposs Blog</h1>
     <h1>
      Minipedia
     </h1>
    </header>
    <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
     { articles !== null && Object.keys(articles).map((categ) => (
        <ArticleItemList
         category={categ}
         articles={articles[categ]}
         key={categ}
        />
     ))}
    </section>

    <footer className="text-center font-poppins p-7 border-t-2 border-neutral-600">
      Contacto: kalcast00@proton.me
    </footer>
   </section>
    <div className="absolute md:w-30 md:h-20 md:top-20 md:left-20 w-6 h-6 top-6"> 
     <Link href={"/site/info"}>
      <InformationCircleIcon width={50}/>
     </Link>
    </div>
  </main>
  );
}
