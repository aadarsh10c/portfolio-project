import React, { useState } from "react";
import { FaBars , FaTimes } from 'react-icons/fa'

export default function Navbar(){

    const links = [
        {
            id:1,
            link: 'Home'
        },
        {
            id:2,
            link: 'About'
        },
        {
            id:3,
            link: 'Expierience'
        },
        {
            id:4,
            link: 'Project'
        },
        {
            id:5,
            link: 'Contact'
        }
    ]

    const [ nav , setNav ] = useState( false )

    const navList = links.map ( ({ id , link }) => {
       return  <li className="px-2 cursor-pointer hover:scale-110 duration-200" 
       key={id}>{link}</li>
    })

    const navList2 = links.map( ({ id, link}) => {
        return <li 
        key={ id }
        className="cursor-pointer py-8 text-6xl hover:text-yellow-200 duration-200" >{ link }</li>
    })

    return(
        <nav className="flex justify-between items-center 
        w-full h-20 bg-stone-900 text-white fixed px-4 " >
            <h1 className="text-4xl">Adarsh</h1>
            <ul className="hidden md:flex">
                { navList }
            </ul>
            <div 
                onClick={() => setNav( !nav )}
                className="cursor-pointer z-11 md:hidden"
            >
                {
                    nav ?
                    <FaTimes size={30} /> :
                    <FaBars size={30}/>
                }
            </div>
            { nav && <ul 
            className="flex flex-col justify-center 
            items-center absolute -z-10 top-0 left-0  w-full h-screen
            bg-gradient-to-b from-slate-600 to-slate-900">
                { navList2 }
            </ul>}
        </nav>
    )
}