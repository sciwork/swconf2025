"use client";

import { useState } from "react";
import { REGISTER_URL } from "@/configurations/constants";
import routes from "@/configurations/routes";
import Button from "@/components/Button";
import Drawer from "@/components/Drawer";
import DrawerLink from "@/components/DrawerLink";
import Logo from "@/components/Logo";

const MobileNavigator = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <>
      <Button onClick={toggleMenu}>Menu</Button>
      <Drawer show={isMenuOpen} onClick={toggleMenu}>
        <div className="tw:flex tw:h-screen tw:flex-col">
          <div className="tw:grow">
            <div className="tw:px-6 tw:pt-8 tw:pb-4" onClick={toggleMenu}>
              <Logo variant="light" />
            </div>
            <div onClick={toggleMenu}>
              {routes
                .filter((route) => !route.disabled)
                .map((route) => (
                  <DrawerLink key={route.path} to={route.path}>
                    {route.name}
                  </DrawerLink>
                ))}
            </div>
          </div>
          <div className="tw:border-t tw:border-t-gray-200 tw:pt-6 tw:pb-10">
            <p className="tw:px-6 tw:font-yk tw:leading-loose tw:font-medium tw:text-gray-400">
              Previous Conference
            </p>
            <DrawerLink to="https://conf2024.sciwork.dev/" secondary is_blank>
              sciwork 2024
            </DrawerLink>
            <DrawerLink to="https://conf2023.sciwork.dev/" secondary is_blank>
              sciwork 2023
            </DrawerLink>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileNavigator;
