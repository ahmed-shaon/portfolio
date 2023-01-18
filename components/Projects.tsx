import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typing';
import { urlFor } from '../sanity';

type Props = {
    projects: Project[];
}

export default function Projects({ projects }: Props) {
    console.log(projects);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0 }}
            className='h-screen relative overflow-hidden flex flex-col md:flex-row text-left justify-evenly items-center max-w-full mx-auto z-0'>
            <h3 className='absolute top-16 xl:top-24 tracking-[20px] text-gray-500 text-2xl uppercase'>Projects</h3>

            <div className='w-full relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0B]/80'>
                {projects.map((project, i) => (
                    <div className="w-screen snap-center flex flex-col justify-center items-center space-y-5 p-20 md:p-44 h-screen flex-shrink-0" key={i} >
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            src={urlFor(project?.image).url()} alt=""
                            className='w-[300px] h-[200px] xl:w-[500px] xl:h-[400px]' />

                        <div className='space-y-5 xl:space-y-10 px-0 md:px-10 max-w-4xl'>
                            <h4
                                className='text-lg xl:text-4xl font-semibold text-center'>
                                {`${i + 1}.`} {project?.title}
                            </h4>
                            <div className='flex items-center space-x-2 justify-center'>
                                {
                                    project.technologies.map(technology =>
                                        <img 
                                        className='w-10 h-10 rounded-full'
                                        key={technology._id} src={urlFor(technology?.image).url()} alt='' />
                                )}
                            </div>
                            <p className='text-center md:text-left text-sm'>{project?.summary}</p>
                        </div>
                    </div>
                )

                )}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0B]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}