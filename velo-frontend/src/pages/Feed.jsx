import React from "react"
import Questions from "../components/Questions"
import defaultImg from "../assets/images/valley_landscape.png"
import {useSelector} from 'react-redux'

const Feed= () => {

    const posts = useSelector(state => state.post.feed)
    return (
        <div className="p-5 md:p-7">
            <h1 className="py-4 font-semibold text-lg">Questions from students all over Africa...</h1>
            {
                        posts.map(post => <Questions firstName={post.poster.user.first_name}  key={post.id} id={post.id} username={post.poster.username} lastName={post.poster.user.last_name} profile_image={'' || defaultImg} post_text={post.post_text}/>)
            }
        </div>
    )
}

export default Feed