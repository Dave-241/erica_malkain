import Contact from "../components/general-component/contact";
import Contact_wrappeer from "../components/general-component/contact_wrapper";
import Footer from "../components/general-component/footer";
import Nav from "../components/general-component/nav";
import Categories from "../components/media/categories";
import Media_hero from "../components/media/hero";
import { supabase } from "../utils/supabaseClient";
export const revalidate = 0;
const fetchProducts = async () => {
  const { data, error } = await supabase
    .from("media")
    .select("*")
    .order("created_at", { ascending: false });

  // if (error) throw notFound();
  // console.log(data);
  return data;
};
export default async function Meida() {
  const product_data = await fetchProducts();

  return (
    <>
      <>
        <Nav />
        <Media_hero />
        <Categories product_data={product_data || [{}]} />
        <Contact_wrappeer />
        <Footer />
      </>
    </>
  );
}
