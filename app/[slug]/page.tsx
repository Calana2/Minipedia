import Link from "next/link"
import {ArrowLeftIcon} from "@heroicons/react/24/solid"
import {getArticleData} from "@/lib/articles"

export default async function Page({params}: {params: {slug: string}}) {
 const articleData = await getArticleData(params.slug)
 return (
  <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
   <div className="flex justify-between font-poppins">
    <Link href={"/"} className="flex flex-row gap-1 place-items-center">
     <ArrowLeftIcon width={20}/>
     <p>volver al inicio</p>
    </Link>
    <p>{articleData.date.toString()}</p>
   </div>
   <article dangerouslySetInnerHTML={{__html: articleData.contentHtml}}/>
  </section>
 )
}
