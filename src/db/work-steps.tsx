import { WorkStep } from "@/types/work-step";
import { Code, Lightbulb, MousePointer, Rocket } from "lucide-react";

export const workSteps: WorkStep[] = [
  {
    icon: <MousePointer />,
    title: "Discovery",
    description:
      "We learn about your business, goals, and audience to understand your unique needs.",
    color: "bg-neon-green",
  },
  {
    icon: <Lightbulb />,
    title: "Strategy",
    description:
      "Our team develops a custom strategy tailored to your specific objectives.",
    color: "bg-blue-500",
  },
  {
    icon: <Code />,
    title: "Implementation",
    description:
      "We bring your strategy to life with expert design and development.",
    color: "bg-purple-500",
  },
  {
    icon: <Rocket />,
    title: "Launch",
    description:
      "Your project goes live with our continued support for optimal performance.",
    color: "bg-pink-500",
  },
];
