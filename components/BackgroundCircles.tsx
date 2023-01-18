import React from 'react'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='rounded-full border border-[#333333] h-[300px] w-[300px] mt-52 absolute'/>
        <div className='rounded-full border border-[#333333] h-[500px] w-[500px] mt-52 absolute'/>
        <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] animate-pulse mt-52 absolute'/>
        <div className='rounded-full border border-[#333333] h-[850px] w-[850px] mt-52 absolute'/>
    </div>
  )
}