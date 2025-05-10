'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Twitter,
    Linkedin,
    Facebook,
    Dribbble,
    Github,
} from 'lucide-react';

const Footer = () => {
    const footerSections = [
        {
            title: 'Product',
            links: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases']
        },
        {
            title: 'Company',
            links: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact']
        },
        {
            title: 'Resources',
            links: ['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support']
        },
        {
            title: 'Social',
            links: ['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribbble']
        },
        {
            title: 'Legal',
            links: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact']
        }
    ];

    const socialIcons = [
        { icon: Twitter, name: 'Twitter' },
        { icon: Linkedin, name: 'Linkedin' },
        { icon: Facebook, name: 'Facebook' },
        { icon: Github,    name: 'Github' },
        { icon: Dribbble, name: 'Dribbble' }
    ];

    return (
        <footer className="bg-black text-white px-6 py-12 md:px-20">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Newsletter */}
                <motion.div
                    className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <h4 className="text-lg font-semibold">Join our newsletter</h4>
                        <p className="text-sm md:text-base text-[#F4F4F4] font-medium">
                            We’ll send you a nice letter once per week. No spam.
                        </p>
                    </div>
                    <form className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 rounded text-black bg-white outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 cursor-pointer"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>

                {/* Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10 text-sm">
                    {/* Branding */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 font-bold text-xl mb-3">
                            <Image
                                src="/logo.png"
                                alt="Hydrogen Logo"
                                width={150}
                                height={150}
                                className="object-contain"
                                priority
                            />

                        </div>
                        <p className="text-[#F4F4F4] font-medium">
                            Design amazing digital experiences that <br/> create more happy in the world.
                        </p>
                    </div>

                    {/* Footer Navigation Links */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h5 className="font-semibold mb-2 text-[#F5F5F5] ">{section.title}</h5>
                            <ul className="space-y-1 text-[#F4F4F4]">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="hover:underline">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="border-t border-[#FCE300] pt-6 flex flex-col md:flex-row md:justify-between text-sm text-gray-500">
                    {/* <p>© 2023 Untitled UI. All rights reserved.</p> */}
                        {/* write copy Right                     */}
                        <p className='font-medium text-white'> &copy; {new Date().getFullYear()}. All rights
            reserved.</p>

                    <p></p>
                    <div className="flex gap-4 mt-4 md:mt-0 text-white">
                        {socialIcons.map(({ icon: Icon, name }) => (
                            <Link key={name} href="#" aria-label={name}>
                                <Icon className="w-5 h-5 hover:text-yellow-400 transition-colors" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
