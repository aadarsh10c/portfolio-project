import React from "react";
import { GrLinkedin } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function SocialLinks(){

    const links = [
        {
            id:1,
            href:"https://www.linkedin.com/in/adarsh-kumar-010c/",
            child:(
                <>
                    Linkedin<GrLinkedin size={25}/> 
                </>
            ),
            download:false,
            style:" text-white bg-blue-500"
                
        },
        {
            id:2,
            href:"https://github.com/aadarsh10c",
            child:(
                <>
                    Github<BsGithub size={25}/> 
                </>
            ),
            download:false,
            style:" text-white bg-black"

                
        },
        {
            id:3,
            href:"mailto:foo@gmail.com",
            child:(
                <>
                    Mail <HiOutlineMail size={25} /> 
                </>
            ),
            download:false,
            style:' text-white bg-red-400'

                
        },
        {
            id:4,
            href: '../assets/resume.pdf',
            child:(
                <>
                    Resume <BsFillPersonLinesFill size={25}/> 
                </>
            ),
            download:true,
            style:' text-white bg-green-500'
                
        }

    ]
    const linkList = links.map( ({id , href , child , download ,style}) => {
        return ( <li key={id} className="flex-grow">
            <a href={ href } target="_blank" download={download}
                className={"flex justify-center  items-center text-lg font-bold px-2 py-2 gap-4  md:justify-between md:w-40 md:ml-[-65px] md:hover:ml-0 duration-300"+ style }>{ child }</a>
        </li> )
    })
    return(
        <div>
            <ul className="flex items-center justify-around w-screen h-20 fixed -bottom-4
                            md:absolute md:top-[45%] md:left-0 md:flex md:flex-col md:items-start">
                { linkList }
            </ul>
        </div>
    )
}