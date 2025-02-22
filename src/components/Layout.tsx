import React from "react";
import { cn } from "../lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[hsl(271_81%_14%)] text-white">
      <div className="flex min-h-screen flex-col">
        <header className="border-b border-[hsl(271_81%_24%)]">
          <div className="container flex h-16 items-center px-4 sm:px-8">
            <nav className="flex flex-1 items-center space-x-6">
              <span className="text-xl font-bold tracking-tight">
                Legal
                <span className="text-[hsl(267_100%_70%)]">AI</span>ze
              </span>
            </nav>
          </div>
        </header>
        <main className={cn("flex-1 px-4 py-6 sm:px-8 sm:py-12", className)}>
          {children}
        </main>
      </div>
    </div>
  );
}
