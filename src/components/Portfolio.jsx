import React from "react";

//import icons
import { BsGithub } from 'react-icons/bs'

//import image
import vanlife from '../assets/Vanlife.jpg'
import tenzies from '../assets/Tenzies-game.jpg'
import airBnB from '../assets/AirBnB-Clone.png'
import meme from '../assets/meme-generator.jpg'
import speed from '../assets/speed-typing.jpg'
import dashboard from '../assets/dashboard.png'

export default function Portfolio(){

    const projects = [
        {
            id:1,
            title:'Vanlife Project',
            Livelink:'https://keen-starship-9d2a68.netlify.app/',
            imageURL: vanlife,
            gitHubLink:'https://github.com/aadarsh10c/VanLife-react',
            style:' border-green-500'
        },
        {
            id:2,
            title:'Tezies Game',
            Livelink:'https://papaya-crostata-ca3fd1.netlify.app/',
            imageURL:tenzies,
            gitHubLink:'https://github.com/aadarsh10c/Tenzies-react-app',
            style:' border-blue-800 '
        },
        {
            id:3,
            title:'AirBnB Clone',
            Livelink:'https://sparkling-paprenjak-020ee7.netlify.app/',
            imageURL:airBnB,
            gitHubLink:'https://github.com/aadarsh10c/AirBnb-Clone',
            style:' border-orange-300'
        },
        {
            id:4,
            title:'Meme Generator',
            Livelink:'https://starlit-bombolone-af67ec.netlify.app/',
            imageURL:meme,
            gitHubLink:'https://github.com/aadarsh10c/meme-generator-react',
            style:' border-violet-600'
        },
        {
            id:5,
            title:'Speed Typing Game',
            Livelink:'https://spectacular-melomakarona-c5d12a.netlify.app/',
            imageURL:speed,
            gitHubLink:'https://github.com/aadarsh10c/speed-typing-game',
            style:' border-slate-500'
        },
        {
            id:6,
            title:'Dashboard Extension',
            Livelink:'https://keen-starship-9d2a68.netlify.app/',
            imageURL:dashboard,
            gitHubLink:'https://github.com/aadarsh10c/speed-typing-game',
            style:'border-green-500'
        },
    ]
    return(
     <div className="bg-blue-100 w-full h-fit py-20 px-4 ">
        <h1 className="text-5xl  border-b-2 leading-8 underline decoration-green-500 underline-offset-4 w-[71%] mb-8 mx-auto">
            PROJECTS
        </h1>
        <ul name='PROJECTS'
            className="flex flex-col  items-end  justify-around gap-8 
                        md:grid md:grid-cols-3 md:grid-rows-2 md:w-[71%] md:mx-auto">
            {
               projects.map( ({id , title , Livelink , imageURL, gitHubLink ,style }) => {
                return(
                    <li key={id} className={"w-[70%] md:w-fit mx-auto md:mx-0  border-l-8 border-b-8 border-t-[1px] border-r-[1px]  rounded-t-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-2 " + style}>
                        <div >
                                <div>
                                    <img src={imageURL} alt={title} className="opacity-60 md:w-[100%] md:max-h-[150px]" />
                                </div>
                                <h3 className="text-2xl font-bold text-center  my-2 ">
                                    {title}
                                </h3>
                                <div className="flex justify-around items-center m-2">
                                    <div className="p-2 border-2 border-black hover:bg-slate-200">
                                        <a href={Livelink} target="_blank" className="text-lg cursor-pointer"> Live Demo</a>
                                    </div>
                                    <div>
                                        <a href={gitHubLink} target="_blank" className="flex justify-between items-center gap-2 text-lg hover:bg-slate-300 p-4 cursor-pointer">Github<span><BsGithub size={20} /></span></a>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident hic debitis nobis exercitationem? Quia, facere vitae. Corrupti placeat perferendis ab porro voluptatibus in molestias, officiis, non, unde accusantium ducimus! Vero!
                                </p>
                        </div>
                    </li>
                )
               }) 
            }
            
        </ul>
     </div>
        
    )
}