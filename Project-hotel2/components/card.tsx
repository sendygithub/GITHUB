import Image from "next/image"
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";


const Card =()=> {
  return (
    <div className="bg-white shadow-lg rounded-sm transition duration-100 hover:shadow-sm">
        <div className="h-[260px] w-auto rounded-t-sm relative">
            <Image src="/hero.jpg" alt="Card Image" width={384} height={256} className="object-cover object-center w-full h-full rounded-t-sm" />
        </div>
        <div className="p-8">
            <h4 className="test-2xl font-medium">
                <Link href="#" className="hover:text-gray-800 transition duration-150">Luxury Hotel Room</Link>
            </h4>
            <h4 className="text-2xl mb-7">
                <span className="font-semibold text-gray-600">Rp. 2100000</span>
                <span className="text-gray-400 text-sm">/Night</span>
            </h4>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <IoPeopleOutline/>
                    <span className="text-gray-600">2 People</span>
                </div>
                <Link href="#" className="px-6 py-2.5 md:px-10 md:py-3 font-semibold text-white bg-orange-400 rounded-sm hover:bg-orange-500 transition duration-150">Book Now</Link>
            </div>
        </div>
    </div>
  )
}

export default Card