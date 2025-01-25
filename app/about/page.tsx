import React from "react";
import Image from "next/image";
import { AnimatedImageGallery } from "@/components/ui/animated-image-gallery";

export default function About() {
  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col items-center px-[52px] gap-[80px]">
        <div className="flex flex-row items-start gap-[80px]">
          <div className="w-[485px] h-[485px] relative">
            <AnimatedImageGallery />
          </div>
          <div className="flex flex-col pt-[40px] gap-6">
            <h1 className="text-[42px] font-bold leading-[52px] text-[#161C24]">
              Hello!
            </h1>
            <p className="text-[18px] leading-[28px] text-[#637381]">
              I&apos;m Neha Chhillar, a UX designer passionate about creating
              meaningful digital experiences. My journey in design is driven by a
              deep curiosity about how people interact with technology and a desire
              to make those interactions more intuitive and enjoyable.
              <br />
              <br />
              I believe in design that goes beyond aesthetics - it&apos;s about
              understanding user needs, solving real problems, and creating
              solutions that resonate with people on both functional and emotional
              levels. My approach combines analytical thinking with creative
              problem-solving, always keeping the end user at the heart of the
              design process.
            </p>
          </div>
        </div>
        <div className="w-[485px] h-[485px] relative">
          <Image
            src="/images/about-office.png"
            alt="Office environment"
            className="rounded-[18px] object-cover"
            fill
          />
        </div>
      </section>
    </main>
  );
} 