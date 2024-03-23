'use client'
import Image from 'next/image'


import ecuador from "@/public/assets/img/banderaecuador.svg"
import externallink from "@/public/assets/img/externallinksvgrepo.svg"
import freecodecamp from "@/public/assets/img/freecodecamp.svg"
import google from "@/public/assets/img/google.png"
import meta from "@/public/assets/img/meta.png"
import harvard from "@/public/assets/img/hardvard.png"
import georgiatech from "@/public/assets/img/gt-logo.svg"
import catpixel from "@/public/assets/img/catpixel.gif"
import laptoppixel from "@/public/assets/img/laptoppixel.png"

import { useEffect, useState, } from "react";
import Link from 'next/link'


export const SummarySection = (props : {summary:any}) => {
    
    return(
        <>
            <div className='grid grid-cols-1 gap-5 my-auto summary-section-to-show'>
                <div className='w-full grid md:grid-cols-6 text-[30px] md:text-[50px] '>
                    <div className='my-auto grid gap-y-5 md:col-span-2 '>
                        <div className='grid gap-y-2 justify-center'>
                        <p className="">{props.summary.imfrom}</p>
                        <Image src={ecuador} alt="Ecuadorian" 
                            width={60} height={10}
                            title="Ecuador"
                            className="mx-auto"/>
                        </div>
                        <hr className="mx-5"/>
                        <div className="grid md:-space-y-5 mx-auto text-center">
                            <span>{props.summary.age}</span>
                            <span>24</span>
                        </div>
                    </div>
                    <div className='my-auto grid gap-y-5 md:col-span-4 '>
                    <div className=' grid text-[20px] md:text-[35px]'>
                        <span>
                        {props.summary.istudied}
                        </span>
                        <div className="flex">
                        <p className="text-[18px] md:text-[26px] gradient-text-university">
                            {props.summary.university}
                        </p>
                        <Link target="_blank" className="w-fit my-auto rounded-md bg-white ml-2" href={"https://www.espoch.edu.ec"}>
                            <Image src={externallink}  alt={props.summary.university} 
                            width={20} height={20}/>
                        </Link>
                        </div>
                        <span>
                        {props.summary.as}
                        </span>
                        <p>{props.summary.profession}</p>
                    </div>
                    <div className='grid gap-y-2 text-[20px] md:text-[40px]'>
                    </div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-6 gap-5 text-[30px] md:text-[50px]'>
                    <div className="md:col-span-6 text-left">
                    <h3 className="text-[20px] md:text-[30px] underline">{props.summary.coursesandcertifications}</h3>
                    </div>
                    <div className="grid relative gap-2 md:col-span-3 p-2 text-[14px] md:text-[18px] max-h-[250px] overflow-y-auto">
                    <Link target="_blank" href={"https://www.coursera.org/account/accomplishments/specialization/8UKZ8DUMEAAB"} className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                        <h3>
                        {props.summary.specializationfrontmeta}
                        </h3>
                        <Image className="" src={externallink}  alt={props.summary.university} 
                        width={20} height={20}/>
                    </Link>
                    
                    <Link target="_blank" href={"https://certificates.cs50.io/64eec961-4a0a-473d-a62d-9860373864ab.pdf?size=letter"} className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                        <h3>
                        {props.summary.harvardcs50py}
                        </h3>
                        <Image className="" src={externallink}  alt={props.summary.university} 
                        width={20} height={20}/>
                    </Link>
                    <Link target="_blank" href={"https://www.coursera.org/account/accomplishments/records/H9JBHSZVA4HB"} className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                        <h3>
                        {props.summary.csharpnet}
                        </h3>
                        <Image className="" src={externallink}  alt={props.summary.university} 
                        width={20} height={20}/>
                    </Link>
                    <Link target="_blank" href={"https://www.coursera.org/account/accomplishments/verify/LNZDHVP6DS3A"} className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                        <h3>
                        {props.summary.angularrouting}
                        </h3>
                        <Image className="" src={externallink}  alt={props.summary.university} 
                        width={20} height={20}/>
                    </Link>
                    <Link target="_blank" href={"https://www.coursera.org/account/accomplishments/verify/LNZDHVP6DS3A"} className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                        <h3>
                        {props.summary.angularrouting}
                        </h3>
                        <Image className="" src={externallink}  alt={props.summary.university} 
                        width={20} height={20}/>
                    </Link>
                    <Link target="_blank" href={"https://www.linkedin.com/in/nix-ramos/details/certifications/"} className="flex gap-2 sticky bottom-0 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                        <h3>
                        {props.summary.viewall}
                        </h3>
                        <Image className="" src={externallink}  alt={props.summary.university} 
                        width={20} height={20}/>
                    </Link>
                    </div>
                    <div className="md:col-span-3 grid grid-cols-3 p-2">
                    <div>
                        <Image src={freecodecamp}
                        alt="freecodecamp"
                        width={100} height={50}
                        />
                    </div>
                    <div className=" ">
                        <Image src={google}
                        alt="google"
                        width={30} height={50}
                        className=""
                        />
                    </div>
                    <div className=" bg-white w-fit h-fit p-2">
                        <Image src={harvard}
                        alt="harvard"
                        width={100} height={50}
                        className=""
                        />
                    </div>
                    <div className=" bg-white w-fit h-fit">
                        <Image src={meta}
                        alt="meta"
                        width={100} height={50}
                        className=""
                        />
                    </div>
                    <div>
                        <Image src={georgiatech}
                        alt="georgiatech"
                        width={100} height={50}
                        className=""
                        />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}