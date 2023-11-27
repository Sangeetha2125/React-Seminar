import axios from "axios"
import { useEffect, useState } from "react"

function Example4(){
    const [post,setPost] = useState([])
    const [postNo,setPostNo] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postNo}`)
        .then(res => {
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[postNo])

    function handleChange(e) {
        setPostNo(e.target.value);
    }

    return (
        <>
        <input value={postNo} onChange={handleChange} />
        {post && <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>}
        </>
    )
}

export default Example4