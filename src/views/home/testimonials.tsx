"use client";
import img1 from "@/assets/testimonial.jpg";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Tech Solutions Inc.",
      image: "410 × 410",
      quote:
        "Working with this agency completely transformed our digital presence. Their strategic approach and attention to detail resulted in a significant increase in engagement and conversions. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder & CEO",
      company: "Startup Innovations",
      image: "410 × 410",
      quote:
        "Outstanding creativity and technical expertise. The team delivered our project ahead of schedule and exceeded all expectations. Our new website has received incredible feedback from our customers.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Williams",
      position: "Brand Manager",
      company: "Global Retail Co.",
      image: "410 × 410",
      quote:
        "The level of professionalism and communication throughout our project was exceptional. The agency truly understood our vision and translated it into a beautiful and functional design.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 relative overflow-hidden container flex items-center justify-center gap-12 md:gap-20">
      <div className="md:block w-[410px] aspect-square bg-gray-700/30 rounded-lg flex-shrink-0 flex items-center justify-center">
        <Image src={img1} alt="Image not found" />
      </div>

      <div className="flex-1 cursor-pointer">
        <div className="flex mb-4">
          {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>

        <blockquote className="text-lg md:text-xl mb-8">
          {testimonials[currentSlide].quote}
        </blockquote>

        <div>
          <h4 className="font-bold">{testimonials[currentSlide].name}</h4>
          <p className="text-sm text-muted-foreground">
            {testimonials[currentSlide].position},{" "}
            {testimonials[currentSlide].company}
          </p>
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
