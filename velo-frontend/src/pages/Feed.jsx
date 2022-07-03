import React from "react"
import Questions from "../components/Questions"
import defaultImg from "../assets/images/valley_landscape.png"

const Feed= () => {
    // get posts
    let posts = [{firstName: "Divine", lastName: "Edeh", id: "divine"}, {firstName: "Divine", lastName: "Edeh", id: "divine"}, {firstName: "Divine", lastName: "Edeh", id: "divine"}]
    return (
        <div className="p-5 md:p-7">
            <h1 className="py-4 font-semibold text-lg">Questions from students all over Africa...</h1>
            {
                posts.map(post => {
                    return <Questions firstName={post.firstName} lastName={post.lastName} key={post.id} id={`${post.id}`} profile_image={post.image || defaultImg} />
                })
            }
        </div>
    )
}

export default Feed