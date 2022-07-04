import {useState} from 'react'
import "../styles/question.css"

const NewQuestion = ({setShowQuestion}) => {

    const [question, setQuestion] = useState('')
    const [topics, setTopics] = useState('')
    const remove = () => {
        setShowQuestion(false)
    }
return (
    <div className=''>
    <div className=''>
        <div className='bg-[white] h-[35%] fixed w-full py-10 rounded-t-[80px] md:rounded-3xl md:w-96 px-6 md:left-0 md:right-0 md:top-0 md:m-auto bottom-0 box'>
            <div className='pb-5'>
                <svg onClick={remove} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer text-white absolute right-10 top-8" fill="#f9f9f9" viewBox="0 0 24 24" stroke="black" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
            <input type='text' className='bg-transparent border-b w-full py-2 outline-none' placeholder='Type a new question...'  vakue={question} onChange={e=>setQuestion(e.target.value)}/>
            <h2 className='font-medium text-sm mt-5'>Topic?</h2>
            <div className='flex md:block'>
            <input type='text' className='bg-transparent border-b w-full py-2 outline-none' placeholder='Set topics...' value={topics} onChange={e=>setTopics(e.target.value)}/>

                <div className='md:mt-6 absolute right-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#003566] rounded-full p-2 rotate-45 bg-gray-200 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </div>
            </div>
        </div>
    </div>
    </div>
)
}

export default NewQuestion