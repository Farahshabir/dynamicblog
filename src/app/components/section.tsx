import Image from "next/image";
import content from "@/app/images/Content.png"
export default function Section(){
    return(
        <>
         <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
      <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
       <Image src={content} alt=""/>
      </div>
    </div>
        </>
    )
}