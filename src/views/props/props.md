````typescript jsx
import ReactMarkdown from 'react-markdown'
import {useState} from "react";
export default function renderProps (){
    const [SourceData, setSourceData] = useState('')

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            setSourceData(() => xmlhttp.responseText)
        }
    }
    // 文件目录在 public/static/test.md 这里不需要写 public 因为打包之后没有此目录。
    xmlhttp.open("GET", "/static/test.md", true);
    xmlhttp.send();
    return (
        <div>
            props
            <ReactMarkdown children={SourceData}>

            </ReactMarkdown>
        </div>
    )
}
````