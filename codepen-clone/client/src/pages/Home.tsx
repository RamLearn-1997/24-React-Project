import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home(){

    return <div className="w-full h-[calc(100dvh-60px)] text-white flex  flex-col justify-center items-center">
        <h1 className=" text-4xl font-semibold text-center">Welcome To<br/>
            WebD Codepen Clone</h1>
        <Button className="mt-5 text-xl p-8"><Link to={'/compiler'}>Let's Code</Link></Button>
    </div>
}