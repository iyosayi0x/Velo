import React from 'react'

const Questions = ({profile_image, firstName, lastName, id, post_text, username}) => {
  let comment = () => {

  }
  return (
    <div>
      <div className='bg-[#003566] rounded-3xl px-5 py-3 mb-5'>
        <div className='py-2 border-b border-b-gray-400'>
          <div className='flex space-x-3 pb-3'>
            <img className='rounded-full w-14 h-14 md:w-14 md:h-14' src={profile_image} />
            <div className='text-white '>
              <h1 className='font-medium'>{`${firstName} ${lastName}`}</h1>
              <p className='text-gray-300'>{`@${username}`}</p>
            </div>
          </div>
          <div>
            <p className='text-white'>{post_text}</p>
          </div>
        </div>
        <div className='pt-3'>
          <svg onClick={comment} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        </div>
      </div>
    </div>
  )
}

export default Questions