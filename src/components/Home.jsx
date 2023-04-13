import React from "react";
import HeroImage from "../assets/heroImage.png"
import {BsArrowRightCircle} from 'react-icons/bs'

export default function Home(){
    return(
        <div name="Home"
            className="bg-blue-100 w-full h-screen
                        flex flex-col items-center justify-center
                        px-4 md:flex-row-reverse md:justify-around">
            <div className="w-6/12 md:w-2/12 mb-8 md:border-solid md:border-sky-500 md:border-4">
                <img className='rounded-xl md:p-4' src={HeroImage} alt="my profile picture" />
            </div>
            <div className="md:w-1/2">
                <h1 className="text-5xl text-center md:text-left md:text-7xl font-medium mb-4 md:mb-8">
                    I'm a Full Stack Developer
                </h1>
                <p className="font-medium text-center md:text-left text-xl md:text-3xl leading-8 md:leading-10 mb-4 md:mb-8">
                    I have 8 years of expierience in builiding and designing
                    web appications.
                    Currently, I love to work on web applications using technologies like 
                    React , Tailwind, and Graph QL  
                </p>
                <button className="group text-2xl md:text-4xl w-fit flex items-center justify-between gap-1 px-6 py-3
                                    bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white my-0 mx-auto sm:m-0">
                    Portfolio
                    <span className=" group-hover:rotate-90 ml-3 duration-300">
                        <BsArrowRightCircle />
                    </span>
                </button>
            </div>
        </div>
    )
}