import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/page-layout";

export default function Home() {
  return (
    <PageLayout>
      <section className="flex flex-col items-center gap-10 w-[498px] mx-auto">
        <div className="relative w-[238px] h-[210px]">
          <Image
            src="/images/avatar.gif"
            alt="Animated avatar"
            fill
            className="object-contain"
            priority
            sizes="238px"
          />
        </div>
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="flex flex-col justify-center items-center px-3 gap-1 relative isolate">
            <div className="flex justify-center relative inline-block">
              <h1 className="text-[42px] font-bold leading-6 text-[#161C24] relative z-10 whitespace-nowrap pb-[4.9px]">Neha Chhillar</h1>
              <div className="absolute w-full h-2 left-0 bottom-0 bg-[#FFAB00]" />
            </div>
            <h2 className="text-[24px] font-medium leading-6 text-[#454F5B] uppercase mt-3">
              Product Designer (User Experience)
            </h2>
          </div>
          <p className="text-[20px] leading-[26px] text-[#454F5B] text-center w-[496px]">
            Crafting designs where <span className="text-orange-500">utility</span> meets <span className="text-orange-500">aesthetic</span>,
            <br />balancing user experience with business requirements.
          </p>
        </div>
      </section>

      <section className="mt-[60px] pb-[40px] px-[52px] flex flex-col items-center">
        <div className="flex flex-col gap-6">
          {/* First Card - Cybersecurity Project */}
          <div className="flex w-[1151px] h-[312px] bg-white border border-[#C4CDD5] rounded-[18px] overflow-hidden">
            {/* Left side with image */}
            <div className="relative w-[640px] h-[312px] overflow-hidden">
              <div className="absolute w-[640px] h-[312px] left-0 top-0">
                <Image
                  src="/images/infosec-project.png"
                  alt="Infosec Project"
                  width={640}
                  height={312}
                  className="object-cover"
                  priority
                />
                <div className="absolute right-0 top-0 w-[111px] h-full bg-gradient-to-r from-transparent to-white" />
              </div>
            </div>

            {/* Right side with content */}
            <div className="flex-1 flex flex-col p-6 bg-[#212B36]">
              <div className="flex flex-col gap-[25px] w-[463px] h-[264px]">
                <span className="text-[14px] font-medium leading-6 text-[#F4F6F8]">
                  Understanding / Research / Web Product Design
                </span>
                
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[26px] font-bold leading-8 text-[#F9FAFB] w-[433px]">
                      Accelerating AI & Innovation in Cyber Security
                    </h3>
                    <span className="text-[14px] font-medium leading-6 text-[#F9FAFB]">
                      @Infosec ventures / SaaS Products
                    </span>
                  </div>
                  
                  <p className="text-[18px] font-medium leading-6 text-white w-[373px]">
                    Leading Design in Phishing Simulations & User-Centric Cybersecurity Solutions
                  </p>
                </div>

                <div className="flex gap-1.5 items-center">
                  <Button variant="custom" size="custom" className="text-[#FFFFFF] hover:text-[#FFFFFF]">
                    Case Study Coming Soon
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card - HR Management */}
          <div className="flex w-[1151px] h-[312px] bg-white border border-[#C4CDD5] rounded-[18px] overflow-hidden">
            {/* Left side with image */}
            <div className="relative w-[640px] h-[312px] overflow-hidden">
              <Image
                src="/images/usability-testing.jpg"
                alt="UX Research and Usability Testing"
                width={640}
                height={312}
                className="object-cover"
                priority
              />
              <div className="absolute right-0 top-0 w-[111px] h-full bg-gradient-to-r from-transparent to-white" />
            </div>

            {/* Right side with content */}
            <div className="flex-1 flex flex-col p-6 gap-2.5 bg-[#EFF6E8]">
              <div className="flex flex-col items-start gap-6">
                <span className="text-[14px] text-[#919EAB] leading-6">
                  Understanding / Research / Product Design / Web & App
                </span>
                
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[26px] font-bold leading-8 text-[#365B23]">
                      Building UX in HR & People Management
                    </h3>
                    <span className="text-[14px] text-[#454F5B] leading-6">
                      @TexlaCulture / SaaS Product
                    </span>
                  </div>
                  
                  <p className="text-[18px] text-[#212B36] leading-6">
                    Goal is to Precisely build solutions not just HR management software
                  </p>
                </div>

                <Button variant="custom" size="custom">Case Study</Button>
              </div>
            </div>
          </div>

          {/* Third Card - Website Design */}
          <div className="flex w-[1151px] h-[312px] bg-white border border-[#C4CDD5] rounded-[18px] overflow-hidden">
            {/* Left side with image */}
            <div className="relative w-[640px] h-[312px] overflow-hidden">
              <Image
                src="/images/texla-website.png"
                alt="Texla Website Design"
                width={640}
                height={312}
                className="object-cover"
                priority
              />
              <div className="absolute right-0 top-0 w-[111px] h-full bg-gradient-to-r from-transparent to-white" />
            </div>

            {/* Right side with content */}
            <div className="flex-1 flex flex-col p-6 gap-2.5 bg-[#EFF3FF]">
              <div className="flex flex-col items-start gap-[42px]">
                <span className="text-[14px] text-[#919EAB] leading-6">
                  Research / Web Design / Branding
                </span>
                
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[26px] font-bold leading-6 text-[#1939B7]">
                      Website Design
                    </h3>
                    <span className="text-[14px] text-[#454F5B] leading-6">
                      @TexlaCulture / SaaS Product
                    </span>
                  </div>
                  
                  <p className="text-[18px] text-[#212B36] leading-6">
                    Making a website go live in just one week was an exceptional challenge.
                  </p>
                </div>

                <Button variant="custom" size="custom">Case Study</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
