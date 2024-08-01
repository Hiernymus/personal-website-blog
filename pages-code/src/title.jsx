import { useState } from 'react'
function App() {
    const [list, setList] = useState({
        showlist: false,
        list: []
    })
    //const [showlist, setShowlist] = useState(false)
    //const [list, setList] = useState([])
    if(list.showlist === true){
        fetch("api/list.js")
            .then(res => res.json())
            .then(data => {
                setList({
                    showlist: true,
                    list: data
                })
            })
    }
    return (
        <>
            <div className='content' onClick={()=>{
                setShowlist(!showlist)
            }}>
                <h3>Hiernymus's Blog</h3>
            </div>
            <ul>
                {
                    list.list.map((item, index)=>{
                        <li key={index}>{item}</li>
                    })
                }
            </ul>
        </>
  )
}


export default App

