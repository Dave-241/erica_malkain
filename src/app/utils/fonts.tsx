import localFont from "next/font/local";

import { Spline_Sans, EB_Garamond, DM_Sans } from "next/font/google";

export const spline_font = Spline_Sans({
  subsets: ["latin"],
});

export const eb_gramond_font = EB_Garamond({
  subsets: ["latin"],
});
export const dm_sans_font = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});
export const eb_gramond_italic_font = EB_Garamond({
  subsets: ["latin"],
  style: "italic",
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
export const Media_san_regular = localFont({
  src: "../../../public/fonts/media_sans/mediasans-regular-TRIAL-BF63c75479e5ff3.otf",
});
