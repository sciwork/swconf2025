"use client";

import { useState } from "react";
import routes from "@/configurations/routes";
import Button from "@/components/Button";
import Drawer from "@/components/Drawer";
import DrawerLink from "@/components/DrawerLink";
import Logo from "@/components/Logo";

const MobileNavigator = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openWorkshops, setOpenWorkshops] = useState(false);
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
            <div>
              {routes
                .filter((route) => !route.disabled)
                .map((route) => {
                  // if route has children (like /workshops) render as an expandable button
                  if (route.children && route.children.length > 0) {
                    return (
                      <div key={route.path}>
                         <button
                           type="button"
                           className="tw-w-full tw-text-left tw:block tw:font-yk"
                           onClick={(e) => {
                             e.stopPropagation();
                             setOpenWorkshops((prev) => !prev);
                           }}
                         >
                           <div className="tw:px-7 tw:py-2 tw:text-2xl tw:font-medium tw:hover:text-sky-400 tw-leading-loose tw:text-black">
                             {route.name}
                           </div>
                         </button>

                        {openWorkshops && (
                          <div className="tw-pl-6 tw-pt-2">
                            {route.children.map((child) => (
                              <DrawerLink
                                key={child.path}
                                to={child.path}
                                secondary
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setOpenWorkshops(false);
                                }}
                              >
                                <span className="tw:px-8 tw:font-yk tw:leading-tight tw:font-normal tw:text-base tw:text-gray-400">
                                  {child.name}
                                </span>
                              </DrawerLink>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <DrawerLink
                      key={route.path}
                      to={route.path}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {route.name}
                    </DrawerLink>
                  );
                })}
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
