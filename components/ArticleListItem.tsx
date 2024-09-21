import Link from "next/link"
import type {ArticleItem} from "@/types"

interface Props {
 category: string
 articles: ArticleItem[]
}

const ArticleItemList = ({category, articles}: Props) => {
 return (
  <div className="flex flex-col gap-5">
   <h2 className="font-cormorantGaramond text-4xl border-b-purple-400 p-2 neon-purple-banner">
   {category}</h2>
   <div className="flex flex-col gap-2.5 font-poppins text-lg">
   {articles.map((article,id)=>(
     <Link href={`/${article.id}`} key={id} className="text-neutral-200 
      transition duration-150 hover:text-neutral-600">
     {article.title} 
     </Link>
   ))}
   </div> 
  </div>  
 )
}

export default ArticleItemList

