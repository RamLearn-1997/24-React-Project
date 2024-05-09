import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound(){

    return <div className="w-full h-[calc(100dvh-60px)] bg-gray-700 text-white flex flex-col justify-center items-center  overflow-hidden">
        <h1 className="text-2xl font-bold mb-5">Not Found</h1>
        <Link to={'/'}><Button variant={'default'}>Go Back</Button></Link>
        
        </div>
}