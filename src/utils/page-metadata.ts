import { TMetaTag } from "@/types/cms/common";
import { Metadata } from "next";

export const generatePageMetadata = (
  meta?: TMetaTag,
  slug?: string
): Metadata => {
  const url = slug ? `${process.env.NEXT_PUBLIC_APP_URL}/${slug}` : undefined;

  return {
    ...(meta?.title ? { title: meta?.title } : {}),
    ...(meta?.description ? { description: meta?.description } : {}),
    alternates: {
      canonical: url,
    },
    robots: {
      index: meta?.index,
      follow: meta?.follow,
    },
    openGraph: {
      title: meta?.title,
      description: meta?.description,
      url,
      images: meta?.ogImage
        ? [
            {
              url: meta.ogImage.url,
              width: meta.ogImage.width,
              height: meta.ogImage.height,
              alt: meta.title,
            },
          ]
        : [],
    },
    twitter: {
      card: meta?.ogImage ? "summary_large_image" : "summary",
      title: meta?.title,
      description: meta?.description,
      images: meta?.ogImage ? [meta.ogImage.url] : [],
    },
  };
};
