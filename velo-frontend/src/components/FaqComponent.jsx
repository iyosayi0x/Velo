import React, {useState} from 'react'

const FaqComponent = ({ question, answer }) => {
    const [expand, setExpand] = useState(false)
    const expandClass = expand ? "display" : "hidden"
    const ansClass = `${expandClass} p-4`
  return (
    <div className='shadow rounded border border-gray-100 border-t-0'>
            <div className='p-4 text-xl relative font-medium'>
                <div className='w-5/6'>
                    <h1>{question}</h1>
                </div>
                <button aria-label='question-expander' className='text-xl absolute top-0 right-0 p-4 focus:outline-none' onClick={() => setExpand(!expand)}>
                    {
                        expand ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    }
                </button>
            </div>
            <div className={ansClass}>
                <p>{answer}</p>
            </div>
        </div>
  )
}

export default FaqComponent