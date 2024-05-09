import { Button } from "./ui/button";
import { Share2, Save, Loader2, Code2, Clipboard } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useDispatch, useSelector } from "react-redux";
import { CompilerSliceStateType, updateCurrentLanguage } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function HelperHeader() {
    const [saveLoading, setSaveLoading] = useState<boolean>(false)
    const [shareBtn, setShareBtn] = useState<boolean>(false)
    const navigate = useNavigate()

    const fullCode = useSelector((state: RootState) => state.compilerSlice.fullCode)

    const { urlId } = useParams()
    useEffect(() => {
        if (urlId) {
            setShareBtn(true)
        } else {
            setShareBtn(false)
        }
    }, [urlId])

    const handleSaveCode = async () => {
        setSaveLoading(true)
        try {
            const repsonse = await axios.post('http://localhost:4000/compiler/save', {
                fullCode: fullCode
            })
            console.log(repsonse.data)
            navigate(`/compiler/${repsonse.data.url}`, { replace: true })
        } catch (error) {
            handleError(error)
        } finally {
            setSaveLoading(false)
        }
    }

    const dispatch = useDispatch()
    const defaultValue = useSelector((state: RootState) => state.compilerSlice.currentLanguage)

    return <div className="__helper_header h-[60px] bg-slate-700 text-white p-2 flex justify-between items-center ">
        <div className="__btn_container flex gap-2">
            <Button onClick={handleSaveCode} variant={'success'} disabled={saveLoading}>

                {saveLoading ? <><Loader2 className=" animate-spin mr-2" />Saving</> : <><Save size={20} className='mr-2' />Save</>}
            </Button>
            {shareBtn &&
                (<Dialog>
                    <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"><Share2 size={20} className='mr-2' />Share</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="flex items-center justify-center">Share Your Code <Code2 className="ml-2" /></DialogTitle>
                            <DialogDescription className="flex flex-col gap-3">
                                <div className="__url flex gap-3">
                                    <input
                                        type="text"
                                        disabled
                                        value={window.location.href}
                                        className="w-full px-2 py-2 rounded bg-slate-800 text-slate-300 select-none" />
                                    <Button variant={'outline'} className=" hover:bg-slate-200 hover:text-black"
                                        onClick={() => {
                                            window.navigator.clipboard.writeText(window.location.href)
                                            toast("URL Copied on your Clipboard!")
                                        }}><Clipboard size={15} /></Button>
                                </div>
                                <p className="text-center">Share this URL with your friends to collaborate.</p>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>)}
        </div>
        <div className="__tab_switcher flex justify-center items-center">
            <span className="text-sm font-medium mr-3">Language :</span>
            <Select defaultValue={defaultValue}
                onValueChange={(value) => dispatch(updateCurrentLanguage(value as CompilerSliceStateType['currentLanguage']))}>
                <SelectTrigger className="w-[150px] bg-gray-800 outline-none focus:ring-0">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="html">HTML</SelectItem>
                    <SelectItem value="css">CSS</SelectItem>
                    <SelectItem value="javascript">JAVASCRIPT</SelectItem>
                </SelectContent>
            </Select>
        </div>
    </div>
} 