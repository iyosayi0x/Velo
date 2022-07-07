import React, { useState} from "react"
import placeholder_image from "../../assets/images/valley_landscape.png"
import UserDisplay from "../../components/UserDisplay"
import Questions from "../../components/Questions"
import {useSelector} from 'react-redux'
import NewQuestion from "../../components/newQuestion"
import "../../styles/question.css"


const Dashboard=()=>{
    const user = useSelector(state => state.user)
    const [question, setNewQuestion] = useState(false)

    let profileImage;

    const posts = useSelector(state => state.post.posts)
    const newQuestionHandler = () => {
        setNewQuestion(true)
    }

    return (
        <div>
            <div className={`${question ? "blur" : ""}`}>
                <div className="p-5">
                    <UserDisplay first_name={user.first_name} last_name={user.last_name} username={`@${user.profile?.username}`} bio={user.profile?.about} country={user.profile?.country} />
                </div>
                <div className="p-5">
                    <div className="flex space-x-6 py-4 font-medium">
                        <h1>Questions</h1>
                    </div>
                    <div className="mx-0 md:mx-36">
                    {
                        posts.map(post => <Questions firstName={post.poster.user.first_name}  key={post.id} id={post.id} username={post.poster.username} lastName={post.poster.user.last_name} profile_image={profileImage || placeholder_image} post_text={post.post_text}/>)
                    }
                    </div>
                </div>
                <div onClick={newQuestionHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="fixed right-8 md:right-12 bottom-8 md:bottom-12 hover:cursor-pointer h-10 w-10 bg-[#001d3d] rounded-full p-2" fill="none" viewBox="0 0 24 24" stroke="#FFF" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                </div>
            </div>
            <div className="">
                {
                    question && <NewQuestion setShowQuestion={setNewQuestion} />
                }
            </div>
        </div>
    )
}

export default Dashboard