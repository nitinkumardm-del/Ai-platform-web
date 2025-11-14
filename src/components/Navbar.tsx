import { Link, NavLink } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import { Rocket } from 'lucide-react'

const NavItem = ({ to, label }: { to: string; label: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
        isActive
          ? 'bg-purple-600 text-white'
          : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
      }`
    }
  >
    {label}
  </NavLink>
)

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 font-extrabold">
          <span className="inline-flex p-2 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 text-white">
            <Rocket className="w-5 h-5" />
          </span>
          <span className="text-xl">AI Platform</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/" label="Home" />
          <NavItem to="/features" label="Features" />
          <NavItem to="/pricing" label="Pricing" />
          <NavItem to="/contact" label="Contact" />
        </nav>
        <div className="flex items-center gap-2">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}
