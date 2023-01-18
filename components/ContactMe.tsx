import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name:string,
    email:string,
    subject:string,
    message:string
  };

type Props = {}

export default function ContactMe({ }: Props) {

    const { 
        register, 
        handleSubmit
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href=`mailto:ahmedtanvir444@gmail.com?subject=${formData.subject} & body=Hi, My name is ${formData.name}. ${formData.message} {${formData.email}}`
    };
    return (
        <div className='h-screen relative flex flex-col md:flex-row text-center md:text-left max-w-7xl px-10 justify-evenly items-center mx-auto'>
            <h3 className='absolute top-16 xl:top-24 tracking-[20px] uppercase text-2xl text-gray-500'>Contact Me</h3>

            <div className='flex flex-col space-y-4 xl:space-y-10'>
                <h4 className='text-2xl xl:text-4xl font-semibold text-center'>Are you try to reach out me? Lets talk.</h4>

                <div className='space-y-2 xl:space-y-10'>
                    <div className='flex items-center justify-center space-x-5'>
                        <PhoneIcon className='text-[#F7AB0B] w-7 h-7 animate-pulse' />
                        <p className='text-lg xl:text-2xl'>+880150000000</p>
                    </div>
                    <div className='flex items-center justify-center space-x-5'>
                        <EnvelopeIcon className='text-[#F7AB0B] w-7 h-7 animate-pulse' />
                        <p className='text-lg xl:text-2xl'>ahmedtanvir444@gmail.com</p>
                    </div>
                    <div className='flex items-center justify-center space-x-5'>
                        <MapPinIcon className='text-[#F7AB0B] w-7 h-7 animate-pulse' />
                        <p className='text-lg xl:text-2xl'>Dhaka, Bangladesh</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                        <div className='flex space-x-2'>
                            <input 
                            {...register("name")} 
                            placeholder='Name' 
                            className='contactInput' 
                            type="text" />

                            <input 
                            {...register("email")} 
                            placeholder='Email' 
                            className='contactInput' 
                            type="email" />
                        </div>
                        <input 
                        {...register("subject")} 
                        placeholder='Subject' 
                        className='contactInput' 
                        type="text" />

                        <textarea 
                        {...register("message")} 
                        placeholder='Message' 
                        className='contactInput' />
                        <button 
                        type='submit'
                        className='bg-[#F7AB0B] hover:bg-[#F7AB0B]/70 py-3 xl:py-6 px-10 font-bold text-lg text-black rounded-md'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}