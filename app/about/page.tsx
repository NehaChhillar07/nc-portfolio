import React from "react";
import Image from "next/image";
import { AnimatedImageGallery } from "@/components/ui/animated-image-gallery";
import { Header } from "@/components/layout/header";

export default function About() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <section className="flex flex-col items-center px-[120px] gap-[80px] max-w-[1440px] mx-auto">
          <div className="flex flex-row items-start gap-[80px]">
            <div className="w-[485px] h-[558px] relative">
              <AnimatedImageGallery />
            </div>
            <div className="flex flex-col pt-[40px] gap-6 w-[847px]">
              <h1 className="text-[42px] font-bold leading-[52px] text-[#161C24]">
                Hello,
              </h1>
              <div className="w-[847px] font-['Futura'] font-medium text-[18px] leading-[32px] text-[#212B36] flex flex-col gap-8">
                <p>
                  Thanks for dropping by, Neha Chhillar's profile. She crafts simple, effective designs that resonate with users and meet business goals. In high-pressure situations, her calm approach harmonizes with tight deadlines and complex team dynamics.
                </p>
                <p>
                  Outside of design, spending time with family fills her with joy and inspiration, which she carries into her work. This harmony of personal happiness and professional dedication nourishes her creativity.
                </p>
                <p>
                  She loves to travel and learn about different cultures. It helps her bring new ideas and perspectives into her work.
                </p>
                <p>
                  Let's use these inspirations to create designs that speak to everyone!
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-[847px] ml-[565px]">
            <div className="w-[485px] h-[485px] relative">
              <Image
                src="/images/about-office.png"
                alt="Office environment"
                className="rounded-[18px] object-cover"
                fill
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 