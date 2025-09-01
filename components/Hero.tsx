"use client";

import Image from "next/image";
import {
  faDiscord,
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { REGISTER_URL } from "@/configurations/constants";
import routes from "@/configurations/routes";
import Button from "@/components/Button";
import SocialLink from "@/components/IconLink";
import MobileNavigator from "@/components/MenuDrawer";
import iconImg from "@/assets/android-chrome-192x192.png";

const Hero = () => {
  // const hasOtherPages =
  //   routes.filter((route) => !route.disabled && route.path !== "/").length > 0;
  const hasOtherPages = true;
  const eventDate = new Date("2024-12-14T00:00:00+08:00");
  const currentDate = new Date();

  return (
    <div className="tw:w-screen">
      <div className="tw:relative tw:w-full tw:overflow-hidden">
        <video
          autoPlay
          loop
          playsInline
          muted
          className="tw:relative tw:z-0 tw:min-h-full tw:w-auto tw:max-w-none tw:min-w-full"
        >
          <source src="/hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="tw:absolute tw:inset-0 tw:z-1 tw:flex tw:flex-col tw:bg-linear-to-b tw:from-transparent tw:to-white tw:px-8 tw:pt-5 tw:pb-10 tw:lg:pt-20">
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
          <div className="tw:flex tw:h-full tw:w-full tw:flex-col tw:items-center tw:justify-center">
            <div className="tw:mb-6 tw:flex tw:flex-col tw:items-center tw:gap-4 tw:tablet:mb-8 tw:tablet:flex-row tw:tablet:gap-2">
              <Image className="tw:size-12" src={iconImg} alt="sciwork icon" />
              <div className="tw:font-yk tw:text-5xl tw:tablet:text-7xl">
                sciwork conference
              </div>
            </div>
            <div className="tw:font-yk tw:text-xl tw:tablet:text-3xl">
              December
            </div>
            <div className="tw:font-yk tw:text-xl tw:tablet:text-3xl">
              North Taiwan
            </div>
            {currentDate < eventDate && (
              <div className="tw:flex tw:pt-5">
                <Button variant="action" to={REGISTER_URL} target="_blank">
                  Sign up now!
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
