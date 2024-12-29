import Image from "next/image";
import Header from "../components/header"
import team1 from "@/app/images/team1.jpg";
import team2 from "@/app/images/team2.jpg";
import team3 from "@/app/images/team3.jpg";
import Footer from "../components/footer";
export default function Team(){
    return(
        <>
        <Header/>
        <div className="font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h2 className="text-gray-800 text-4xl font-extrabold">Meet our team</h2>
                </div>

                <div className="grid sm:grid-cols-3 gap-8 max-sm:justify-center mt-12 max-sm:max-w-xs mx-auto">
                    <div className="bg-gray-800 p-4 border rounded-lg">
                        <Image className="w-full object-contain object-top rounded-lg"  src={team1} alt="team 1" />
                    
                        <div className="text-center mt-4">
                            <h4 className="text-base font-semibold text-white">Software Engineer</h4>
                            <p className="text-xs mt-2 text-white">John Doe</p>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 border rounded-lg">
                        <Image src={team2} className="w-full object-contain object-top rounded-lg" alt="team 2" />
                        

                        <div className="text-center mt-4">
                            <h4 className="text-base font-semibold text-white">Web Developer</h4>
                            <p className="text-xs mt-2 text-white">Mark Adair</p>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 border rounded-lg">
                        <Image src={team3} className="w-full object-contain object-top rounded-lg" alt="team 3" />
                       

                        <div className="text-center mt-4">
                            <h4 className="text-base font-semibold text-white">Web Designer</h4>
                            <p className="text-xs mt-2 text-white">Simon Konecki</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="grid sm:grid-cols-3 gap-8 max-sm:justify-center mt-12 max-sm:max-w-xs mx-auto">
                    <div className="bg-gray-800 p-4 border rounded-lg">
                        <Image className="w-full object-contain object-top rounded-lg"  src={team1} alt="team 1" />
                    
                        <div className="text-center mt-4">
                            <h4 className="text-base font-semibold text-white">Software Engineer</h4>
                            <p className="text-xs mt-2 text-white">John Doe</p>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 border rounded-lg">
                        <Image src={team2} className="w-full object-contain object-top rounded-lg" alt="team 2" />
                        

                        <div className="text-center mt-4">
                            <h4 className="text-base font-semibold text-white">Web Developer</h4>
                            <p className="text-xs mt-2 text-white">Mark Adair</p>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 border rounded-lg">
                        <Image src={team3} className="w-full object-contain object-top rounded-lg" alt="team 3" />
                       

                        <div className="text-center mt-4">
                            <h4 className="text-base font-semibold text-white">Web Designer</h4>
                            <p className="text-xs mt-2 text-white">Simon Konecki</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}