"use client";

import { Bt_Beau_Regualr } from "@/app/utils/fonts";
import { supabase } from "@/app/utils/supabaseClient";
import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";

const Login = () => {
  const [showpassword, setshowpassword] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const router = useRouter();
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        router.push("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const [view, setView] = useState<any>("sign_in");
  const viewToMessageMap: any = {
    sign_in: { title: "Sign In" },
    sign_up: { title: "Sign Up" },
    forgotten_password: { title: "Forgot Password" },
    // Add other views and their corresponding titles here
  };

  return (
    <>
      <div className="w-full flex flex-col items-center h-[100vh] justify-center">
        <h1 className="text-[3rem]">
          {viewToMessageMap[view]?.title || "Authentication"}
        </h1>{" "}
        <div className="md:w-[50%] w-[90%]">
          <Auth
            supabaseClient={supabase}
            providers={[]}
            // controls whether to display only social providers
            // onlyThirdPartyProviders
            redirectTo="/"
            // comes with preconfigured themes, can add custom themes
            appearance={{ theme: ThemeSupa }}
            // controls how to display the social provider icons
            socialLayout="horizontal"
            view={view}
            showLinks={false}
          />
        </div>
        {/* <button
          className="underline underline-offset-4"
          onClick={() => {
            setView("forgotten_password");
          }}
        >
          Forgot your password?
        </button> */}
      </div>
    </>
  );
};

export default Login;
