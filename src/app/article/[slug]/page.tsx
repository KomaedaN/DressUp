import ArticleDetail from "@/components/article/ArticleDetail";
import MoreArticle from "@/components/article/MoreArticle";
import { supabase } from "@/utils/supabaseClient";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();
  if (!product || error) {
    return <h1>Produit introuvable</h1>;
  }

  const { data: type } = await supabase
    .from("products")
    .select("*")
    .eq("category_type", product.category_type)
    .eq("category_gender", product.category_gender)
    .neq("slug", slug)
    .limit(10);

  return (
    <>
      <section className="pt-15 pl-6 pr-6 border-t grid grid-cols-2 pl-[100px] gap-x-25">
        <ArticleDetail product={product} />
      </section>
      <section className="pl-20 pr-20 flex flex-col items-center mb-10">
        <MoreArticle type={type ?? []} />
      </section>
    </>
  );
}
