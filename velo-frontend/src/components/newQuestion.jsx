import {useState, useMemo} from 'react'
import "../styles/question.css"
import {useCreatePost} from '../adapters/post'
import {notEmptyString, uid} from '../utils'
import {add_message} from '../store/messages'
import {useDispatch} from 'react-redux'

const NewQuestion = ({setShowQuestion}) => {
    const create_post = useCreatePost()
    const dispatch = useDispatch()

    const [question, setQuestion] = useState('')
    const [topics, setTopics] = useState('')

    const topicsarr = useMemo(()=>{
        return topics.split(/[ ,]+/);
    },[topics])

    const remove = () => {
        setShowQuestion(false)
    }

    const uploadQuestion=async()=>{
        if(notEmptyString(question) ** notEmptyString(topics)){
            const res = await create_post(question, topics)
            if(res.success){
                dispatch(add_message({type:'success', text:'Post created successfully'}))
            }else{
                dispatch(add_message({type:'error', text:'Unable to create post'}))
            }
        }
    }
return (
    <div>
        <div className='bg-[white] newquestion h-[55%] fixed w-full py-10 rounded-t-[80px] md:rounded-3xl md:w-96 px-6 md:left-0 md:right-0 md:top-0 md:m-auto bottom-0 box'>
            <div className='pb-5'>
                <svg onClick={remove} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer text-white absolute right-10 top-8" fill="#f9f9f9" viewBox="0 0 24 24" stroke="black" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
            <h2 className='font-medium text-lg my-3'>Ask a question?</h2>

            <input type='text' className='bg-transparent border-b w-full py-2 outline-none' placeholder='Type a new question...'  vakue={question} onChange={e=>setQuestion(e.target.value)}/>


            <h2 className='font-medium text-lg my-3'>Topic?</h2>
            <section className='newquestion__topicsarr'>
            {
                topicsarr.length > 0 && (
                    topicsarr.map(item => <div key={uid()}>
                        <div className='newquestion__topic'> {item}</div>
                    </div>)
                )
            }
            </section>


            <div className='flex md:block'>
            <input type='text' className='bg-transparent border-b w-full py-2 outline-none' placeholder='Set topics...' value={topics} onChange={(e)=>setTopics(e.target.value)}/>

                <div className='md:mt-6 absolute right-4' onClick={uploadQuestion}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#003566] rounded-full p-2 rotate-45 bg-gray-200 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </div>
            </div>
        </div>
    </div>
)
}

export default NewQuestion