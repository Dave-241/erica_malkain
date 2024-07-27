"use client";

import { Bt_Beau_Regualr } from "@/app/utils/fonts";
import { supabase } from "@/app/utils/supabaseClient";
import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [showpassword, setshowpassword] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loggedin, setloggedin] = useState<any>(false);

  const router = useRouter();
  useEffect(() => {
    // Check initial session
    const checkInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        // setIsAuthenticated(true);
        setloggedin(true);
        // router.push("/"); // Redirect to home page if already logged in
      }
    };

    checkInitialSession();
    // Subscribe to auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        setloggedin(true);
        // router.push("/"); // Redirect to home page on sign in
      } else if (event === "SIGNED_OUT") {
        setloggedin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    setlogout("Logging out");
    const { error } = await supabase.auth.signOut();
    console.log(error);
    console.log("logged out");
    setlogout("Log out");
  };
  const [view, setView] = useState<any>("sign_in");
  const [logout, setlogout] = useState<any>("Log out");
  const viewToMessageMap: any = {
    sign_in: { title: "Sign In" },
    sign_up: { title: "Sign Up" },
    forgotten_password: { title: "Forgot Password" },
    // Add other views and their corresponding titles here
  };

  return (
    <>
      <div className="w-full flex flex-col items-center h-[100vh] justify-center">
        {!loggedin && (
          <>
            {" "}
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
          </>
        )}

        {loggedin && (
          <div className="flex items-center md:flex-row flex-col gap-[3rem]  md:gap-[4rem]">
            {" "}
            <button
              className="underline  text-[2rem] underline-offset-8"
              onClick={() => {
                handleLogout();
              }}
            >
              {logout}
            </button>
            {/* now the link to return to webiste  */}
            <Link
              href={"/"}
              className="underline text-[green] underline-offset-8"
            >
              Return to webiste
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
