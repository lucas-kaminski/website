import type React from "react"
import { cn } from "@/lib/utils"

interface HeaderProps {
  activeDomain: string
  setActiveDomain: (domain: string) => void
}

const Header: React.FC<HeaderProps> = ({ activeDomain, setActiveDomain }) => {
  return (
    <header className="w-full py-4">
      <nav className="container mx-auto flex justify-end items-center">
        {["me", "dev", "com"].map((domain) => (
          <button
            key={domain}
            onClick={() => setActiveDomain(domain)}
            className={cn(
              "mx-1 px-2 py-1 text-sm font-light transition-colors duration-200 ease-in-out",
              activeDomain === domain ? "text-black" : "text-gray-400 hover:text-gray-600",
            )}
          >
            .{domain}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header

