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
    const [modalShowing, setModalShowing] = useState(false)
    let profileImage;
    let firstName = "Divine" // import first name here
    let lastName = "Edeh" // import last name here
    let id = "divine" // import id i.e username here
    const newQuestionHandler = () => {
        setNewQuestion(true)
    }
    const details = [
        {
            name: "Questions",
            id: 1
        },
        {
            name: "Answers",
            id: 2
        },
    ]

    const handleSubmit=async(e)=>{
        e.preventDefault()
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
                        <Questions firstName={firstName} id={id} lastName={lastName} profile_image={profileImage || placeholder_image}/>
                        <Questions firstName={firstName} id={id} lastName={lastName} profile_image={profileImage || placeholder_image}/>
                        <Questions firstName={firstName} id={id} lastName={lastName} profile_image={profileImage || placeholder_image}/>
                        <Questions firstName={firstName} id={id} lastName={lastName} profile_image={profileImage || placeholder_image}/>
                        <Questions firstName={firstName} id={id} lastName={lastName} profile_image={profileImage || placeholder_image}/>
                        <Questions firstName={firstName} id={id} lastName={lastName} profile_image={profileImage || placeholder_image}/>
                        <Questions firstName={firstName} id={id} lastName={lastName} profile_image={profileImage || placeholder_image}/>
                    </div>
                </div>
                <div onClick={newQuestionHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="fixed right-8 md:right-12 bottom-8 md:bottom-12 hover:cursor-pointer h-10 w-10 bg-[#001d3d] rounded-full p-2" fill="none" viewBox="0 0 24 24" stroke="#FFF" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                </div>

                {/* START OF POST MODAL */}
                {modalShowing && <div className='postmodal__overlay'></div>}
                {modalShowing && <div className='postmodal'>
                    <h1>Create a new post </h1>
                    <form className='postmodal__form' onSubmit={handleSubmit}>
                        <div className='my-4'>
                            <label htmlFor='text'>Ask a question</label><br/>
                            <input type='text' value={postText} onChange={(e)=> setPostText(e.target.value)}/>
                        </div>

                        <div>
                            {
                                tagsarr.map(item=> <div key={uid()}> {item} hello world </div>)
                            }
                        </div>
                        <div className='my-4'>
                            <label htmlFor='text'>Tags</label><br/>
                            <input type='text' value={tags} onChange={(e)=> setTags(e.target.value)}/>
                        </div>
                        <div>
                            <button className={isLoading ? 'auth__btn auth__btn--loading' : 'auth__btn'}>{isLoading ? 'Loading...' : 'Create Post'}</button>
                        </div>
                    </form>

                </div>}

                {/* END OF POST MODAL */}

            </div>
            <div className="">
                {
                    question && <NewQuestion setQuestion={setNewQuestion} />
                }
            </div>
        </div>
    )
}

export default Dashboard