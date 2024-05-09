import CodeMirror from '@uiw/react-codemirror';
import { githubDark } from '@uiw/codemirror-theme-github';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { updateCodeValue } from '@/redux/slices/compilerSlice';




export default function CoderEditor() {

    const defaultValue = useSelector((state:RootState) => state.compilerSlice.currentLanguage)

    const fullCode = useSelector((state:RootState) => state.compilerSlice.fullCode )

    

    const dispatch = useDispatch()
  
  return (
    <CodeMirror
      value={fullCode[defaultValue]}
     height="calc(100vh - 60px - 60px)"
      theme={githubDark}
      extensions={[loadLanguage(defaultValue)!]}
      onChange={(value:string) => {
        // console.log('value:', value);
        dispatch(updateCodeValue(value))
      }}
    />
  );
}