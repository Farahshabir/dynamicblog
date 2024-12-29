'use client'
import Image from "next/image";
import logo from "@/app/images/logo.png";
import Link from "next/link";
export default function Header(){
    return(
        <>
        <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
        <Image className="max-sm:hidden w-36" src={logo} alt="Logo"  />
        <Image className="hidden max-sm:block w-9" src={logo} alt="Logo"  />
        <div id="collapseMenu"
          className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
          <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
          </button>

          <ul
            className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <Link href={"/"} className='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>Home</Link></li>
             <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <Link href={"/team"}className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Team</Link></li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <Link href={"/feature"} className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Feature</Link></li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <Link href={"/blogs"} className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Blog</Link></li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <Link href={"/contact"} className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Contact</Link></li>
          </ul>
        </div>

        <div className='flex max-lg:ml-auto space-x-4'>
          <button
            className='px-4 py-2 text-sm rounded-full font-bold text-gray-500 border-2 bg-transparent hover:bg-gray-50 transition-all ease-in-out duration-300'>Login</button>
          <button
            className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Sign
            up</button>

          <button id="toggleOpen" className='lg:hidden'>
          </button>
        </div>
      </div>
    </header>
        </>
    )
}