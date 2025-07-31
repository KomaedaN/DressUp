import ArticleDetail from "@/components/article/ArticleDetail";
import MoreArticle from "@/components/article/MoreArticle";
import Header from "@/components/Header";
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
    .limit(5);

  return (
    <>
      <Header />
      <section className="lg:pt-15 lg:pl-6 lg:pr-6 border-t grid lg:grid-cols-2 md:grid-cols-[1.8fr_1fr] grid-cols-1 lg:pl-[100px] lg:gap-x-25 gap-x-2 justify-items-center">
        <ArticleDetail product={product} />
      </section>
      <section className="lg:pl-20 lg:pr-20 flex flex-col items-center mb-10">
        <MoreArticle type={type ?? []} />
      </section>
    </>
  );
}
