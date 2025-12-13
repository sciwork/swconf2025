"use client";

import Image from "next/image";
import {
  faDiscord,
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import routes from "@/configurations/routes";
import Button from "@/components/Button";
import SocialLink from "@/components/IconLink";
import MobileNavigator from "@/components/MenuDrawer";
import RegisterQrCodeImg from "@/assets/register-qrcode.png";

const Hero = () => {
  const hasOtherPages =
    routes.filter((route) => !route.disabled && route.path !== "/").length > 0;
  const eventDate = new Date("2025-12-13T00:00:00+08:00");
  const currentDate = new Date();

  return (
    <div className="tw:w-screen">
      <div className="tw:relative tw:w-full tw:overflow-hidden">
        <video
          autoPlay
          loop
          playsInline
          muted
          className="tw:absolute tw:inset-0 tw:z-0 tw:min-h-full tw:w-auto tw:max-w-none tw:min-w-full tw:object-cover"
        >
          <source src="/hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="tw:relative tw:z-1 tw:flex tw:flex-col tw:bg-linear-to-b tw:from-transparent tw:to-white tw:px-8 tw:pt-5 tw:pb-10 tw:lg:pt-20">
          <div className="tw:flex tw:w-full tw:justify-between tw:px-5 tw:pt-8 tw:pb-14">
            <div className="tw:flex">
              <SocialLink icon={faDiscord} to="https://discord.gg/6MAkFrD" />
              <SocialLink
                icon={faXTwitter}
                to="https://twitter.com/intent/tweet?screen_name=sciwork&ref_src=twsrc%5Etfw"
              />
              <SocialLink
                icon={faLinkedin}
                to="https://tw.linkedin.com/company/sciwork"
              />
              <SocialLink
                icon={faFacebook}
                to="https://www.facebook.com/sciworkdev"
              />
            </div>
            {hasOtherPages && (
              <div className="tw:flex tw:items-center">
                <MobileNavigator />
              </div>
            )}
          </div>
          <div className="tw:flex tw:flex-col tw:items-center tw:justify-center tw:pb-20">
            <div className="tw:flex tw:max-w-sm tw:flex-col tw:items-center tw:gap-4 tw:rounded-3xl tw:bg-white/15 tw:p-6 tw:shadow-[0_24px_80px_rgba(46,16,101,0.1)] tw:ring-1 tw:ring-white/40 tw:backdrop-blur-2xl tw:tablet:max-w-md tw:tablet:gap-6 tw:tablet:p-8">
              <div className="tw:rounded-md tw:bg-white/30 tw:p-2 tw:shadow-[0_16px_40px_rgba(140,60,200,0.45)] tw:ring-1 tw:ring-white/60 tw:tablet:p-3">
                <Image
                  className="tw:size-40 tw:rounded-md tw:object-cover tw:desktop:size-52"
                  src={RegisterQrCodeImg}
                  alt="powered by artcoder"
                />
              </div>
              <div className="tw:text-center tw:text-slate-900">
                <p className="tw:font-yk tw:text-xl tw:font-semibold tw:tracking-wide tw:tablet:text-3xl">
                  December 13–14, 2025
                </p>
                <p className="tw:mt-1 tw:font-yk tw:text-lg tw:tablet:text-2xl">
                  National Taiwan University
                </p>
              </div>
              {currentDate < eventDate && (
                <div className="tw:flex">
                  <Button variant="default" to="/register" target="_blank">
                    Sign up now!
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
