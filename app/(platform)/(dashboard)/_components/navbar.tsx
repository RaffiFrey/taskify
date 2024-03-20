import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export const Navbar = () => {
    return (
        <nav className="fixed z-50 top-0 w-full px-4 h-14 border-bottom shadow-sm bg-white flex items-center">
            {/* mobile Sidebar */}
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo />
                </div>
                <Button variant="primary" size="sm" className="rounded-sm hidden md:block h-auto">
                    Create
                </Button>
                <Button variant="primary" size="sm" className="rounded-sm block md:hidden">
                    <Plus className="h-4 w-4" />
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
                            }
                        }
                    }} />
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: {
                                height: 30,
                                width: 30,
                            }
                        }
                    }
                    } />
            </div>
        </nav>
    );
};