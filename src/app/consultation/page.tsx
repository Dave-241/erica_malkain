import Contact from "../components/general-component/contact";
import Contact_wrappeer from "../components/general-component/contact_wrapper";
import Footer from "../components/general-component/footer";
import Nav from "../components/general-component/nav";
import Publication_hero from "../components/publication/hero";
import Publication from "../components/publication/publication";
import Each_consultation from "../components/teaching_consultation/each_consultation";
import Teaching_hero from "../components/teaching_consultation/hero";
import { supabase } from "../utils/supabaseClient";

export const revalidate = 0;
const fetchProducts = async () => {
  const { data, error } = await supabase
    .from("consultation")
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
        <Teaching_hero />
        <Each_consultation product_data={product_data} />
        <Contact_wrappeer />

        <Footer />
      </>
    </>
  );
}
