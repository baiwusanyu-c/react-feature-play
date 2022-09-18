import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus'
import remarkGfm from 'remark-gfm'
import { useFetch } from '../../utils/hooks/use-fetch'
interface IMDProps {
  url: string
}
export default function renderMd(props: IMDProps) {
  const [sourceData, setSourceData] = useState<string>('')
  useEffect(() => {
    useFetch(props.url, (res: string) => setSourceData(() => res))
  }, [useFetch])
  return (
        <div className="p-2 bg-codeBg mt-4 rounded">
            <ReactMarkdown
                           remarkPlugins={[remarkGfm]}
                           components={{
                             code({ inline, className, children, ...props }) {
                               const match = /language-(\w+)/.exec(className || '')
                               return !inline && match
                                 ? (
                                       <SyntaxHighlighter
                                           style={dark as any}
                                           language={match[1]}
                                           PreTag="div"
                                           {...props}
                                       >{String(children).replace(/\n$/, '')}
                                       </SyntaxHighlighter>
                                   )
                                 : (
                                       <code className={className} {...props}>
                                           {children}
                                       </code>
                                   )
                             },
                           }}>
                {sourceData}
            </ReactMarkdown>
        </div>
  )
}
