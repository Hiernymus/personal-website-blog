import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
function App() {
    const [content, setContent] = useState("undefined")
    if(content === "undefined"){
        fetch("api/get.js?page=中国的法律是如此的严苛.md")
            .then(res => res.json())
            .then(data => setContent(data.data))
    }
    
    return (
        <>
            <ReactMarkdown>
                {content}
            </ReactMarkdown>
            
        </>
  )
}


export default App

