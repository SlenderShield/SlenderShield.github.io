/* eslint-disable react/prop-types */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import ModeToggle from "@/components/theme/Mode-Toggle";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { clsx } from "clsx";
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    PopoverBackdrop,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { ChevronDown, X } from "lucide-react";


function MobileNavItem({ href, children }) {
    return (
        <li>
            <PopoverButton as={Link} to={href} className="block py-2">
                {children}
            </PopoverButton>
        </li>
    );
}

function NavLink({ href, children }) {
    let isActive = useLocation().pathname === href;
    return (
        <li>
            <Link
                to={href}
                className={clsx(
                    "relative block px-3 py-2 transition",
                    isActive
                        ? "text-amber-950 dark:text-amber-400"
                        : "hover:text-amber-400 dark:hover:text-amber-400"
                )}
            >
                {children}
                {isActive && (
                    <>
                        <span className="absolute inset-x-1 -top-px h-px bg-gradient-to-r from-amber-700/0 via-amber-700/40 to-amber-700/0 dark:from-amber-400/0 dark:via-amber-400/40 dark:to-amber-400/0" />
                        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-amber-700/0 via-amber-700/40 to-amber-700/0 dark:from-amber-400/0 dark:via-amber-400/40 dark:to-amber-400/0" />
                    </>
                )}
            </Link>
        </li>
    );
}

const DesktopNavbar = (props) => {
    return (
        <nav {...props}>
            <ul className="flex rounded-full  px-3 text-sm font-medium shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blu dark:ring-white/10">
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/blogs">Blogs</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </ul>
        </nav>
    );
};

const MobileNavbar = (props) => {
    return (
        <Popover {...props}>
            <PopoverButton className="group flex items-center rounded-full px-4 py-2 text-sm font-medium  shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur  dark:ring-white/10 dark:hover:ring-white/20">
                Menu
                <ChevronDown className="ml-3 h-auto w-2 stroke-slate-500 group-hover:stroke-slate-700 dark:group-hover:stroke-slate-400" />
            </PopoverButton>
            <Transition>
                {/* Blur the background */}
                <TransitionChild
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <PopoverBackdrop className="fixed inset-0 z-50 bg-slate-800/40 backdrop-blur-sm dark:bg-black/80" />
                </TransitionChild>
                {/* Popover Panel  */}
                <TransitionChild
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <PopoverPanel
                        focus
                        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-slate-900/5 dark:bg-slate-900 dark:ring-slate-800"
                    >
                        <div className="flex flex-row-reverse items-center justify-between">
                            <PopoverButton aria-label="Close menu" className="-m-1 p-1">
                                <X className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                            </PopoverButton>
                            <h2 className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                Navigation
                            </h2>
                        </div>
                        <nav className="mt-6">
                            <ul className="-my-2 divide-y divide-slate-100 text-base text-slate-800 dark:divide-slate-100/5 dark:text-slate-300">
                                <MobileNavItem href="/projects">Projects</MobileNavItem>
                                <MobileNavItem href="/blogs">Blogs</MobileNavItem>
                                <MobileNavItem href="/about">About</MobileNavItem>
                                <MobileNavItem href="/contact">Contact</MobileNavItem>
                            </ul>
                        </nav>
                    </PopoverPanel>
                </TransitionChild>
            </Transition>
        </Popover>
    );
};

const Header = () => {
    return (
        <header className="flex justify-around md:justify-between items-center md:px-28 py-3 z-50">
            <Link to="/">
                <Avatar className="w-12 h-12">
                    <AvatarImage src="https://github.com/slendershield.png" />
                    <AvatarFallback>MDB</AvatarFallback>
                </Avatar>
            </Link>
            <MobileNavbar className="pointer-events-auto md:hidden" />
            <DesktopNavbar className="pointer-events-auto hidden md:block" />
            <ModeToggle />
        </header>
    );
};

export default Header;
