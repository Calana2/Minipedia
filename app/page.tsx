import { getCategorisedArticles } from "@/lib/articles";
import ArticleItemList from "@/components/ArticleListItem"
import Link from "next/link";
import { EyeIcon} from "@heroicons/react/24/solid";

export default function Home() {

  const articles = getCategorisedArticles()

  return (
    <main>
      {/* Eyes */}
      <section className="flex justify-center gap-5 mt-10">
        <div className="">
          <Link href={"/site/info"}>
            <EyeIcon width={50} className="" />
          </Link>
        </div>
        <div className="">
          <Link href={"/site/info"}>
            <EyeIcon width={50} className="" />
          </Link>
        </div>
      </section>

      {/* Text */}
      <section className="mx-auto w-11/12 md:w-1/2 mt-10 flex flex-col gap-16 mb-20">
        <header className="font-cormorantGaramond font-light text-6xl text-white text-center
     flex flex-col gap-4">
          <h1 className="">Minipedia</h1>
          <div className="inline-block">
           <span className="typed-out block text-left">
            El conocimiento es poder
           </span>
          </div>
        </header>
        <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
          {articles !== null && Object.keys(articles).map((categ) => (
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
    </main>
  );
}
