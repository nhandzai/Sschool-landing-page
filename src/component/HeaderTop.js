import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaTwitter, FaFacebook, FaInstagram , FaGithub } from "react-icons/fa";

export default function HeaderTop() {
    return (
        <header className="bg-2 w-screen h-15 md:flex flex-row gap-4 items-center justify-between sm:px-16 px-4 hidden text-white">
            <div className="flex flex-row gap-4">
                <div className="flex flex-row text-center h-10 items-center gap-2">
                    <CiLocationOn color="white" />
                    227 Nguyễn Văn Cừ Q.5, TP.HCM
                </div>

                <div className="flex flex-row text-center h-10 items-center gap-2">
                    <CiMail color="white" />
                    
                    <a href="mailto:examble@example.com" >examble@example.com</a>
                </div>
            </div>

            <div className="flex flex-row gap-4">
                <div className="flex flex-row text-center h-10 items-center gap-6">
                    Follow Us On:
                    <FaTwitter color="white" className="cursor-pointer" />
                    <FaFacebook color="white" className="cursor-pointer"/>
                    <FaInstagram color="white" className="cursor-pointer"/>
                    <FaGithub color="white" className="cursor-pointer"/>
                </div>
            </div>
        </header>
    )

}