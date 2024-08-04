import Nav from "@/app/components/general-component/nav";
import Individual_research from "@/app/components/research/individual_research";
import { supabase } from "@/app/utils/supabaseClient";
import { notFound } from "next/navigation";

export const revalidate = 0;
const fetchProducts = async (slug: any) => {
  // Decode the slug to handle special characters

  const { data, error } = await supabase
    .from("research_blog")
    .select("*")
    .eq("slug", slug);

  // console.log(data);
  if (error) notFound();
  return data;
};

export async function generateStaticParams() {
  const { data: posts } = await supabase.from("research_blog").select("slug");

  return posts?.map(({ slug }) => ({
    slug,
  }));
}

// export async function generateMetadata({ params }: any, parent: any) {
//   const product_data = await fetchProducts(params.slug);
//   console.log(params.slug);

//   // excerpt;
//   return {
//     title: product_data[0].title,
//     description: product_data[0].caption,
//     openGraph: {
//       images: [
//         {
//           url: product_data[0].image,
//           //   width: 800,
//           //   height: 600,
//         },
//       ],
//       type: "website",
//     },
//   };
// }
export default async function Home({ params }: { params: { slug: string } }) {
  const product_data = await fetchProducts(params.slug);
  console.log(product_data);

  return (
    <>
      <Nav />
      <Individual_research
        product_data={product_data}
        text={product_data[0].text}
      />
    </>
  );
}
