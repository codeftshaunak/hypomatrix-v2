import { blogServiceTags } from "@/services/apis/blog";
import { clientServiceTags } from "@/services/apis/client";
import { faqServiceTags } from "@/services/apis/faq";
import { memberServiceTags } from "@/services/apis/member";
import { pageServiceTags } from "@/services/apis/page";
import { projectServiceTags } from "@/services/apis/project";
import { serviceServiceTags } from "@/services/apis/service";
import { websiteServiceTags } from "@/services/apis/website";
import { TBlogPost } from "@/types/cms/blog";
import { CmsContentType } from "@/types/cms/enums";
import { TPage } from "@/types/cms/page";
import { TProject } from "@/types/cms/project";
import { TService } from "@/types/cms/service";
import { TMember } from "@/types/cms/team";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  // Check for secret to confirm this is a valid request
  // const secret = req.nextUrl.searchParams.get("secret");
  // if (secret !== process.env.REVALIDATE_TOKEN) {
  //   return Response.json({ message: "Invalid token" }, { status: 401 });
  // }

  const body = await req.json();

  const type = body?.data?.__typename as CmsContentType | null;

  if (!type) {
    return Response.json({ message: "Invalid type" }, { status: 400 });
  }

  try {
    switch (type) {
      case CmsContentType.BlogCategory: {
        revalidateTag(blogServiceTags.blogCategories);
        break;
      }
      case CmsContentType.BlogPost: {
        const data = body.data as TBlogPost;
        revalidateTag(blogServiceTags.blogPosts);
        revalidateTag(blogServiceTags.blogPostsFeatured);
        revalidateTag(blogServiceTags.blogPost(data.slug));
        break;
      }
      case CmsContentType.Client: {
        revalidateTag(clientServiceTags.clients);
        break;
      }
      case CmsContentType.Faq: {
        revalidateTag(faqServiceTags.faqs);
        break;
      }
      case CmsContentType.Member: {
        const data = body.data as TMember;
        revalidateTag(memberServiceTags.members);
        revalidateTag(memberServiceTags.member(data.slug));
        break;
      }
      case CmsContentType.Page: {
        const data = body.data as TPage;
        revalidateTag(pageServiceTags.pages);
        revalidateTag(pageServiceTags.page(data.slug));
        break;
      }
      case CmsContentType.Project: {
        const data = body.data as TProject;
        revalidateTag(projectServiceTags.projects);
        revalidateTag(projectServiceTags.projectsFeatured);
        revalidateTag(projectServiceTags.project(data.slug));
        break;
      }
      case CmsContentType.Service: {
        const data = body.data as TService;
        revalidateTag(serviceServiceTags.services);
        revalidateTag(serviceServiceTags.service(data.slug));
        break;
      }
      case CmsContentType.Website: {
        revalidateTag(websiteServiceTags.website);
        break;
      }
      default:
        return Response.json({ message: "Invalid type" }, { status: 400 });
    }
  } catch (err) {
    return Response.json({ message: "Revalidation failed" }, { status: 500 });
  }

  return Response.json({ message: "Revalidation successful" });
}
