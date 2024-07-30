import About_hero from "../components/about/hero";
import Consulation_advert from "../components/general-component/consultation_ad";
import Contact from "../components/general-component/contact";
import Footer from "../components/general-component/footer";
import Nav from "../components/general-component/nav";
import Recent_publication from "../components/general-component/recent_publication";
import Categories from "../components/media/categories";
import Media_hero from "../components/media/hero";
import { supabase } from "../utils/supabaseClient";
export const revalidate = 0;
const publications = async () => {
  const { data, error } = await supabase
    .from("publication")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(4);

  return data;
};
const fetchuser_profile = async () => {
  const { data, error } = await supabase
    .from("about")
    .select("*")
    .order("created_at", { ascending: false });

  return data;
};
export default async function Meida() {
  const product_data = await publications();
  const user_data = await fetchuser_profile();

  return (
    <>
      <>
        <Nav />
        <About_hero user_data={user_data || [{}]} />
        <Recent_publication product_data={product_data} />
        <Consulation_advert user_data={user_data || [{}]} />
        <Contact />
        <Footer />
      </>
    </>
  );
}
