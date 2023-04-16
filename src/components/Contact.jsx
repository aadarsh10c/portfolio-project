import React from "react";

export default function Contact(){
    return(
        <div name='Contact' className="bg-blue-100 px-4 w-full h-screen pt-4">
            <div className="ml-10 md:ml-16">
                <h1 className="text-4xl underline-offset-4 underline decoration-green-500 mb-4 font-semibold">
                    Contact
                </h1>
                <p className="text-2xl">
                    Submit the form to get in touch with me.
                </p>
            </div>
            <div className="mt-8 mx-auto w-[90%] md:w-[93%]">
                <form action="https://getform.io/f/6f871238-d924-4e99-8adf-198f83d5b55f" method='POST' className="flex flex-col items-stretch justify-between gap-4">
                    <input
                     type="text"
                     name='name'
                     placeholder="Enter your name"
                     className="p-2  border-2 rounded-md bg-slate-300
                      focus:outline-none md:text-2xl" />
                     <input
                     type="text"
                     name='email'
                     placeholder="Enter your email"
                     className="p-2  border-2 rounded-md bg-slate-300
                      focus:outline-none md:text-2xl" />
                     <textarea
                     type="text"
                     name='message'
                     row='20'
                     placeholder="Enter your message"
                     className="h-40 p-2 border-2 rounded-md
                      focus:outline-none bg-slate-300 md:text-2xl"></textarea>
                      <button className="bg-gradient-to-b from-cyan-500 to-blue-500 px-6 md:px-10 py-3 md:py-6 my-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300 md:text-2xl">
                        Let's Talk 
                      </button>
                </form>
            </div>            
        </div>
    )
}