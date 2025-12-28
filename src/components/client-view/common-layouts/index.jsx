'use client'
import Link from "next/link";
import {  usePathname } from "next/navigation"
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Navbar from "../navbar";
export default function CommonLayout({children}) {
    const pathName = usePathname();
    return (
        <div className="min-h-screen flex flex-col">
            {pathName !== "/admin" ? <Navbar/> : null }
            <div className="flex-1">
                {children}
            </div>
            {pathName !== "/admin" ? (
                <footer className="border-t border-gray-200 bg-white">
                    <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col gap-2">
                            <p className="text-base font-bold text-gray-900">FullStack Portfolio Website</p>
                            <p className="text-sm text-gray-600">
                                Building clean UI and reliable full-stack features.
                            </p>
                            <p className="text-sm text-gray-500">© 2025 • All rights reserved.</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-sm font-bold text-gray-900">Quick Links</p>
                            <div className="flex flex-col gap-2 text-sm text-gray-600">
                                <Link href="/" className="hover:text-green-main">Home</Link>
                                <Link href="/about" className="hover:text-green-main">About</Link>
                                <Link href="/#project" className="hover:text-green-main">Projects</Link>
                                <Link href="/contact" className="hover:text-green-main">Contact</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-sm font-bold text-gray-900">Social</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/SHANTO612"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:text-green-main hover:border-green-main transition"
                                    aria-label="Github"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/al-fahad-shanto-7ab153288/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:text-green-main hover:border-green-main transition"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a
                                    href="https://www.facebook.com/alfahad.shanto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:text-green-main hover:border-green-main transition"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF />
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            ) : null}
        </div>
    )
}
