import { supabase } from "@/app/utils/supabaseClient";
import Contact from "./contact";
export const revalidate = 0;
const fetchProducts = async () => {
  const { data, error } = await supabase
    .from("contact")
    .select("*")
    .order("created_at", { ascending: false });

  // if (error) throw notFound();
  console.log(data);
  return data;
};
export default async function Contact_wrappeer() {
  const product_data = await fetchProducts();

  return (
    <>
      <>
        <Contact product_data={product_data || [{}]} />
      </>
    </>
  );
}
