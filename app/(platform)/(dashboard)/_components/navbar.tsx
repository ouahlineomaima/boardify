import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <nav className="fixed z-50 px-4 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center">
      {/* Mobile sidebar */}
      <MobileSidebar/>
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          size="sm"
          className="rounded-sm hidden md:block h-auto py-1.5 px-2" variant="primary"
        >
          Create
        </Button>
        <Button size="sm" className="rounded-sm md:hidden" variant="primary">
          <Plus className="h-4 w-4"></Plus>
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton appearance={{
            elements:{
                avatarBox:{
                    height:30,
                    width:30
                }
            }
        }}/>
      </div>
    </nav>
  );
};

export default Navbar;
