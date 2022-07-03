import React, { useState } from "react"
import placeholder_image from "../../assets/images/valley_landscape.png"
import UserDisplay from "../../components/UserDisplay"
import Questions from "../../components/Questions"
import { useNavigate } from "react-router-dom"

const Dashboard=()=>{
    let profileImage;
    let firstName = "Divine" // import first name here
    let lastName = "Edeh" // import last name here
    let id = "divine" // import id i.e username here
    let nav = useNavigate()
    const newQuestion = () => {
        setTimeout(() => {
            nav("/feed/new")
        }, 1000);
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
    const [tab, setTab] = useState(1);
    function handleClicked(value) {
        setTab(value)
    }
    return (
        <div>
            <div>
                <div>
                    <UserDisplay first_name={firstName} last_name={lastName} id={`@${id}`} bio="I'm a Software Engineer! I code with Javascript, React, Nodejs and express!!" country="Nigeria 🇳🇬" />
                </div>
                <div>
                    <div className="flex space-x-6 py-4 font-medium">
                        <h1>Questions</h1>
                        {/* {
                            details.map((item) => {
                                return <h1 key={item.id} className={`${item.id === tab ? "active" : ""} hover:cursor-pointer text-[#001d3d]`} onClick={() => {
                                    handleClicked(item.id)
                                    }}>
                                    {item.name}
                                </h1>
                            })
                        } */}
                    </div>
                    <div className="mx-7 md:mx-36">
                        <Questions firstName={firstName} id={id} lastName={lastName} profile_image={profileImage || placeholder_image}/>
                        {/* {
                            tab === 1 ? 
                            <div>
                                <Questions profile_image={placeholder_image}/>
                            </div>
                                : <div>
                                    <Answers/>
                                </div>
                        } */}
                    </div>
                </div>
                <div onClick={newQuestion}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="fixed right-8 md:right-12 bottom-8 md:bottom-12 hover:cursor-pointer h-10 w-10 bg-[#001d3d] rounded-full p-2" fill="none" viewBox="0 0 24 24" stroke="#FFF" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                </div>
            </div>
        </div>
    )
}

export default Dashboard