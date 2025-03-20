import { Metadata } from "next";

const METADATA: Metadata = {
  title: "Mesa",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  openGraph: {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://https://mesanovas.com/",
    siteName: "Mesanovas",
    images: [
      {
        url: "https://https://mesanovas.com/favicon.ico",
        width: 220,
        height: 220,
        alt: "mesanovas",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mesa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: ["https://https://mesanovas.com/favicon.ico"],
    site: "@mesa",
  },
};

export { METADATA };
