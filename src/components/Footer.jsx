/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function NavLink({ href, children }) {
    return (
        <Link
            to={href}
            className="transition hover:text-teal-500 dark:hover:text-teal-400"
        >
            {children}
        </Link>
    );
}

const Footer = () => {
    return (
        <footer className="mt-32 ">
            <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40 md:px-24">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        <NavLink href="/projects">Projects</NavLink>
                        <NavLink href="/blogs">Blogs</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </div>
                    <p className="text-sm text-center">
                        &copy; {new Date().getFullYear()} Muralidhara Bhat KS{" "}
                        <br className="md:hidden" />
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
