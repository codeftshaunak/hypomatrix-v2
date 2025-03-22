"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function VideoPlaceholder() {
  const videoId = "qzGxK6Uiu04";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleDialogClose = () => {
    setIsVideoPlaying(false); // Reset to show the thumbnail
  };

  return (
    <div className="mt-12 w-full relative">
      <div className="bg-gray-300 w-full h-[250px] md:h-[500px] flex items-center justify-center rounded-lg relative">
        {isVideoPlaying ? (
          <img
            src={thumbnailUrl}
            alt="Video Thumbnail"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : null}
        <Dialog>
          <DialogTrigger
            className="absolute bg-[#9CFE4F] p-8 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setIsVideoPlaying(true)} // Set video to play
          >
            <Play size={32} className="text-black" />
          </DialogTrigger>
          <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
            {/* DialogTitle added for accessibility */}
            <DialogTitle>
              <VisuallyHidden>Video Player</VisuallyHidden>
            </DialogTitle>
            {isVideoPlaying && (
              <iframe
                width="100%"
                height="500px"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </DialogContent>
          <DialogClose onClick={handleDialogClose} />{" "}
        </Dialog>
      </div>
    </div>
  );
}
