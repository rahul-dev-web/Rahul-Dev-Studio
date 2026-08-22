import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rahul Development Studio",
    short_name: "RDS",
    description: "Websites, applications and custom digital solutions by Rahul Development Studio.",
    start_url: "/",
    display: "standalone",
    background_color: "#080a0e",
    theme_color: "#080a0e",
    icons: [{ src: "/brand/logo.png", sizes: "768x768", type: "image/png", purpose: "any maskable" }],
  };
}
