import Contact from "../components/general-component/contact";
import Contact_wrappeer from "../components/general-component/contact_wrapper";
import Footer from "../components/general-component/footer";
import Nav from "../components/general-component/nav";
import Each_research from "../components/research/each_research";
import Research_hero from "../components/research/hero";
import { supabase } from "../utils/supabaseClient";
export const revalidate = 5;
const fetchProducts = async () => {
  const { data, error } = await supabase
    .from("research_blog")
    .select("*")
    .order("created_at", { ascending: false });

  // if (error) throw notFound();
  // console.log(data);
  return data;
};
export default async function Home() {
  const product_data = await fetchProducts();

  return (
    <>
      <>
        <Nav />
        <Research_hero />
        <Each_research product_data={product_data || []} />
        {/* <Contact_wrappeer /> */}
        <Footer />
      </>
    </>
  );
}
