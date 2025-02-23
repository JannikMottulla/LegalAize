import { cn } from "./lib/utils";
import { Outlet } from "react-router-dom";

const ApplicationLayout = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <div className="flex min-h-screen flex-col">
        <header className="border-b border-[#2D3348]">
          <div className="container flex h-16 items-center px-4 sm:px-8">
            <nav className="flex flex-1 items-center space-x-6">
              <span className="text-xl font-bold tracking-tight">
                Legal
                <span className="text-[hsl(267_100%_70%)]">AI</span>ze
              </span>
            </nav>
          </div>
        </header>
        <main className={cn("flex-1")}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ApplicationLayout;
