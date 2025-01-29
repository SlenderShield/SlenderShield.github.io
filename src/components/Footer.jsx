/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function NavLink({ href, children }) {
    return (
        <Link
            to={href}
            className="transition hover:text-gray-500 dark:hover:text-gray-400"
        >
            {children}
        </Link>
    );
}

const Footer = () => {
    return (
        <footer className="mt-32">
            <div className="border-t-2 border-slate-200 pt-10 pb-16 dark:border-slate-700/40 md:px-24">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex gap-6 text-base text-balance font-semibold text-slate-800 dark:text-slate-200">
                        <NavLink href="/projects">Projects</NavLink>
                        <NavLink href="/blogs">Blogs</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </div>

                    <p className="text-bas text-center">
                        &copy; {new Date().getFullYear()} Muralidhara Bhat KS{" "}
                        <br className="lg:hidden" />
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
