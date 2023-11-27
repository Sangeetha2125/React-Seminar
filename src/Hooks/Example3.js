import axios from "axios"
import { useEffect, useState } from "react"

function Example3(){
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (
        <div className="posts">
            {posts && posts.map((post)=>(
                <div key={post.id} className="post">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Example3