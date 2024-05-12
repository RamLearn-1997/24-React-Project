import CoderEditor from "@/components/CodeEditor"
import HelperHeader from "@/components/HelperHeader"
import RenderCode from "@/components/RenderCode"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { updateFullCode } from "@/redux/slices/compilerSlice"
import { handleError } from "@/utils/handleError"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { toast } from "sonner"


export default function Compiler() {
    const {urlId} = useParams()
    const dispatch = useDispatch()

    console.log("ADITYA: "+urlId);
    const loadCode = async () => {
        await axios.post("http://localhost:4000/compiler/load", {
                urlId: urlId
            }).then( (response) => {
                dispatch(updateFullCode(response.data.fullCode))
            }).catch( (error) => {
                if(axios.isAxiosError(error)){
                    if(error?.response?.status === 500){
                     toast("Invalid URL, Default Code Loaded")
                    }
                 }
                 handleError(error)
            }) 

    }

    useEffect(()=>{
        console.log("ADITYA: "+urlId);
         if(urlId){
           loadCode()
         }
    },[urlId])
    
    return (
        <ResizablePanelGroup
            direction="horizontal"
        >
            <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[350px]" defaultSize={50}>
                <HelperHeader/>
                <CoderEditor/>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[350px]" defaultSize={50}>
                <RenderCode/>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}