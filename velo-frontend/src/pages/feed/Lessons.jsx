import React from "react"
import Tag from "../../components/Tag"

const Lesson=()=>{
    return (
        <div className="p-5">
            <div>
                <h1 className="font-semibold text-lg md:text-xl">Select Categories you love!</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 my-5">
                    <Tag tag="Software Engineering"/> {/* tags from db */} 
                    <Tag tag="Software Engineering"/>
                    <Tag tag="Software Engineering"/>
                    <Tag tag="Software Engineering"/>
                    <Tag tag="Software Engineering"/>
                    <Tag tag="Software Engineering"/>
                    <Tag tag="Software Engineering"/>
                    <Tag tag="Software Engineering"/>
                    <Tag tag="Software Engineering"/>
                    <Tag tag="Software Engineering"/>
                    <Tag tag="Software Engineering"/>
                    <Tag tag="Software Engineering"/>
                </div>
            </div>
        </div>
    )
}

export default Lesson