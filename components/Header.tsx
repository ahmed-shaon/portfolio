import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FaEnvelope } from 'react-icons/fa';
import { Social } from '../typing';

type Props = {
    socials: Social[];
}

export default function Header({ socials }: Props) {
//export default function Header({ }: Props) {
    //console.log(socials);
    
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center'>
                {
                    socials.map((social) => (

                        <SocialIcon
                            key={social._id}
                            url={social.url}
                            fgColor='gray'
                            bgColor='transparent' />
                    ))
                }
            </motion.div>
            <Link href="#contactme">
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{ duration: 1.5 }}
                    className='flex flex-row items-center text-gray-300 cursor-pointer'>
                    <FaEnvelope className='w-5 h-5 mr-2' />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
                </motion.div>
            </Link>
        </header>
    )
}