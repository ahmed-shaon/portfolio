import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Frontend Developer</h4>
                <p className='font-bold text-2xl mt-1'>Facebook</p>
                <div className='flex space-x-2 my-2'>
                    <motion.img className='w-10 h-10 rounded-full'
                        src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="" />
                    {/* Tech Used */}
                </div>
                <p className='uppercase py-5'>Started:20-02-24 End:30-12-24</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Work Summary Work Summar</li>
                    <li>Work Summary Work Summar</li>
                    <li>Work Summary Work Summar</li>
                </ul>
            </div>
        </article>
    )
}