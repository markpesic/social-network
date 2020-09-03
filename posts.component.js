import React, {useState, useEffect} from 'react'
import Post from './post'
import Axios from 'axios'


function Posts(){
    const [post, setPost] = useState([])

    useEffect(()=>{
        const friendsData = async ()=>{
            await Axios.post('http://localhost:4000/api/posts/friends_new_posts', {
                email:JSON.parse(localStorage.getItem('user')).email
            }, {withCredentials:true})
                .then(res=>{
                    console.log(res)
                    if(res.data !== 'No new posts')
                        setPost(res.data)
                })
                .catch(e=>{
                    console.log(e)
                })
        }
        friendsData()
    }, [])

    return(
        <div className="container justify-content">
            <div className="row">
                    {post.map(posts=>{
                        return <div className="col-md-12 my-2 "><Post Obj={posts}/> </div>
                    })}
                
            </div>
        </div>
    )
}

export default Posts;