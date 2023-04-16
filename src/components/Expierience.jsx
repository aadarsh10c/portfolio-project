import React from "react";

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import github from '../assets/GitHub_logo.png'
import tailwind from '../assets/tailwind.png'


export default function Expierience( ){
    const techs = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: react,
            title: 'REACT',
            style: 'shadow-blue-500'
        },
        {
            id:5,
            src: github,
            title: 'GTIHUB',
            style: 'shadow-gray-400'
        },
        {
            id:6,
            src: tailwind,
            title: 'TAILWIND',
            style: 'shadow-sky-500'
        }
    ]
    return(
        <div name='Expierience' className="bg-blue-100 w-full h-screen">
            <div className="mx-auto ">
                <div className="ml-10 md:ml-[120px]">
                    <h2 className="text-5xl font-normal pb-8 underline underline-offset-8 decoration-green-500">Expierience</h2>
                    <p className="text-xl pb-8">These are the technologies I've worked on.</p>
                </div>
                <div>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-8   ">
                        {
                            techs.map( ({id, src, title, style}) => {
                                return(
                                    <li key={ id } className={`ml-16 w-40 md:w-60 px-2 py-4 shadow-md md:mx-auto ${style}`}>
                                        <img src={src} alt={title} className="pb-4" />
                                        <p className="text-center">{title}</p>
                                    </li>  
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
