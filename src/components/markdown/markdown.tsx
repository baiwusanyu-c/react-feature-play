
import ReactMarkdown from 'react-markdown'
import {useState,useEffect} from "react";
import {useFetch} from "../../utils/hooks/use-fetch";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus'
import remarkGfm from 'remark-gfm'
interface IMDProps {
    url:string
}
export default function renderMd (props:IMDProps){
    const [sourceData, setSourceData] = useState<string>('')
    useEffect( ()=>{
        useFetch(props.url,(res:string)=>setSourceData(()=>res))
    },[useFetch])
    return (
        <div className='px-4 py-2 bg-codeBg mt-4'>
            {/* @ts-ignore*/}
            <ReactMarkdown children={sourceData as any}
                           remarkPlugins={[remarkGfm]}
                           components={{
                               code({node, inline, className, children, ...props}) {
                                   const match = /language-(\w+)/.exec(className || '')
                                   return !inline && match ? (
                                       <SyntaxHighlighter
                                           children={String(children).replace(/\n$/, '')}
                                           style={dark as any}
                                           language={match[1]}
                                           PreTag="div"
                                           {...props}
                                       />
                                   ) : (
                                       <code className={className} {...props}>
                                           {children}
                                       </code>
                                   )
                               }
                           }}>
            </ReactMarkdown>
        </div>
    )
}