import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
    return (
        <div>
            <div className="flex justify-between px-4 bg-[#082f49] py-24 text-white">
                <div className="w-[600px]">
                    <div className="text-2xl font-bold text-[#dc2626]">
                        <Link href={"/"}>DRONE<span className="text-[#0e7490] text-2xl font-bold">LAND</span></Link>
                    </div>
                    <p className=" mt-2 mb-6">
                        Droneland is the largest UAV dealer in the Bangladesh and we are DJI's largest and most experienced authorized service center in the Bangladesh.
                    </p>
                    <div className="flex gap-4">
                        <Link href={""}><FaFacebookSquare className="text-2xl"/></Link>
                        <Link href={""}><BsInstagram className="text-2xl"/></Link>
                        <Link href={""}><IoLogoYoutube className="text-2xl"/></Link>
                        <Link href={""}><BsTwitterX className="text-2xl"/></Link>
                        <Link href={""}><FaLinkedin className="text-2xl"/> </Link>
                    </div>
                </div>
                <div className="w-[340px] ml-24">
                    <h1 className="font-bold mb-2">PRODUCTS</h1>
                    <div className="flex flex-col">
                        <Link href={""}><span >Consumer</span></Link>
                        <Link href={""}><span >Professional</span></Link>
                        <Link href={""}><span >Enterprise</span></Link>
                        <Link href={""}><span >Cameras</span></Link>
                        <Link href={""}><span >Best Sellers</span></Link>
                        <Link href={""}><span >DJI Refurbished</span></Link>
                    </div>
                </div>
                <div className="w-[340px]">
                    <h1 className="font-bold mb-2 text-sm">CUSTOMER SUPPORT</h1>
                    <div className="flex flex-col">
                        <Link href={""}><span >DJI Care FAQ</span></Link>
                        <Link href={""}><span >Return Policy</span></Link>
                        <Link href={""}><span >Help Videos</span></Link>
                        <Link href={""}><span >Reviews</span></Link>
                    </div>
                </div>
                <div className="w-[340px]"> 
                    <h1 className="font-bold mb-2 text-sm">COMPANY</h1>
                    <div className="flex flex-col">
                        <Link href={""}><span >ABOUT US</span></Link>
                        <Link href={""}><span >CONTACT US</span></Link>
                        <Link href={""}><span >Careers</span></Link>
                        <Link href={""}><span >Blogs</span></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;