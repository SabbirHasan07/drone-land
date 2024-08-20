import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { PiShoppingCartThin } from "react-icons/pi";
const Header = () => {
    return (
        <div>
            <div><h1 className="text-white text-xs text-center bg-[#0e7490] py-2">FREE SHIPPING OVER $599</h1></div>
            <div className="flex justify-between px-4 py-4 bg-[#082f49]">
                <div className="text-4xl font-bold text-[#dc2626]">DRONE<span className="text-[#0e7490] text-4xl font-bold">LAND</span></div>
                <div className="flex justify-center mt-3 gap-6 text-sm  ">
                    <Link href={""} ><span className="font-bold hover:bg-gray-800 text-white py-1 px-2">DRONES</span></Link>
                    <Link href={""} ><span className="font-bold hover:bg-gray-800 text-white py-1 px-2">CAMERA & SENSORS</span></Link>
                    <Link href={""} ><span className="font-bold hover:bg-gray-800 text-white py-1 px-2">GIMBALS</span></Link>
                    <Link href={""}><span className="font-bold hover:bg-gray-800 text-white py-1 px-2">ACCESSORIES</span></Link>
                    <Link href={""}><span className="font-bold hover:bg-gray-800 text-white py-1 px-2">DRONEREPAIR</span></Link>
                    <Link href={""}><span className="font-bold hover:bg-gray-800 text-white py-1 px-2">SPECIALS</span></Link>
                    <Link href={""}><span className="bg-gray-900 py-2 px-3 text-white font-bold">ENTERPRISE</span></Link>
                </div>
                <div className="flex text-2xl gap-4 mt-2">
                    <CiSearch className="text-white" />
                    <GoPerson  className="text-white" />
                    <PiShoppingCartThin  className="text-white"/>
                </div>
            </div>
        </div>
    )
}

export default Header;