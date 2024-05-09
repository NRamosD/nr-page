import Image from "next/image"
import Link from "next/link"
import externallink from "@/public/assets/img/externallinksvgrepo.svg"



export const WorkPositionComponent = (props : {experience:any}) => {


    return(
        <>
            <div className="grid grid-cols-10 gap-2 xl:gap-5 box-to-show-experience">
                <div className='h-full w-full row-span-1 md:row-span-1 col-span-10 md:col-span-3'>
                <div className="grid p-5">
                    <p>I currently work here</p>
                    <div className="h-full w-full text-black bg-white p-4 rounded-lg shadow-md shadow-black">
                    <h2 className=" text-xl">Responsible Travel SA</h2>
                    <h3 className="text-sm font-light">From May 2023 until Now</h3>
                    <h3 className="text-sm font-light mt-2">Position in the Company:</h3>
                    <h3 className=" text-xl font-extrabold">Web Developer</h3>
                    </div>
                </div>
                </div>
                <div className='h-fit w-full row-span-1 md:row-span-1 col-span-10 md:col-span-7 py-2 xl:py-10 px-2'>
                <div className="h-full w-full text-black bg-white p-4 rounded-lg shadow-md shadow-black">
                    <div className="py-2">
                    <h3 className=" font-bold">What I did here?</h3>
                    <p>ajkshd kjash kjdhkjas hdkj haskh d</p>
                    </div>
                    <div className="py-2">
                    <h3 className=" font-bold">Projects</h3>
                    <ul className="list-disc mx-5">
                        <li className="px-2">
                        <h4 className=" font-semibold">Name of the project</h4>
                        <span><Link href={"#"} className="underline flex">Take a view <Image src={externallink} width={15} height={15} alt="Take a view"/> </Link></span>
                        <p>text about what i did in this project</p>
                        </li>
                        <li className="px-2">
                        <h4 className=" font-semibold">Name of the project</h4>
                        <p>text about what i did in this project</p>
                        </li>
                        <li className="px-2">
                        <h4 className=" font-semibold">Name of the project</h4>
                        <p>text about what i did in this project</p>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}