import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function VideoPlaceholder() {
  const videoId = "qzGxK6Uiu04";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="w-full relative">
      <Dialog>
        <div className="w-full h-[500px] flex items-center justify-center rounded-lg relative">
          <Image
            src={thumbnailUrl}
            alt="Video Thumbnail"
            className="w-full h-full object-cover rounded-lg absolute left-0 top-0 -z-[1]"
            fill
          />
          <DialogTrigger asChild>
            <Button className="size-24 [&_svg]:!size-6">
              <Play />
            </Button>
          </DialogTrigger>
        </div>
        <DialogContent className="sm:max-w-4xl w-full p-0 overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            className="aspect-video"
            src={videoUrl}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
}
