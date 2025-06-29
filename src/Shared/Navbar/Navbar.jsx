import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const navItems = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-[#030712]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                        >
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">
                        Apu Paul
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 mr-32">{navItems}</ul>
                    <div className="ml-32 mr-4">
                        <a
                            href="/ApuPaul_Resume.pdf"
                            download
                            className="btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
