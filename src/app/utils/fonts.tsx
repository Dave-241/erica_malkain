import localFont from "next/font/local";

import { Spline_Sans } from "next/font/google";

export const spline_font = Spline_Sans({
  subsets: ["latin"],
  //   weight: ["400", "700"], // Specify the weights you need
});

export const Bt_Beau_Regualr = localFont({
  src: "../../../public/fonts/BT-BeauSans/BT-BeauSans-Regular-BF64d45952e54c1.ttf",
});
export const Helvetica_bold = localFont({
  src: "../../../public/fonts/helvetica_neue/HelveticaNeueBold.otf",
});
export const Helvetica_medium = localFont({
  src: "../../../public/fonts/helvetica_neue/HelveticaNeueMedium.otf",
});
export const Helvetica_light = localFont({
  src: "../../../public/fonts/helvetica_neue/HelveticaNeueLight.otf",
});
