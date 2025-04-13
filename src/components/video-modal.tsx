import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getWebsite } from "@/services/apis/website";
import { Play } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default async function VideoPlaceholder() {
  const webRes = await getWebsite();
  const thumbnail = webRes?.data?.videoThumbnail.url;

  if (!thumbnail) return null;

  return (
    <div className="w-full relative">
      <Dialog>
        <div className="w-full aspect-video md:aspect-[2.58] flex items-center justify-center rounded-lg">
          <Image
            src={thumbnail}
            alt="Video Thumbnail"
            className="w-full h-full object-cover rounded-lg absolute left-0 top-0 -z-[1]"
            fill
          />
          <DialogTrigger asChild>
            <Button className="md:size-24 size-16 [&_svg]:!size-6 bg-primary/60 hover:bg-primary/70">
              <Play />
            </Button>
          </DialogTrigger>
        </div>
        <DialogContent className="sm:max-w-4xl w-full p-0 overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            className="aspect-video"
            src={webRes.data?.videoUrl}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
}
