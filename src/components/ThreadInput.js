import React from 'react'

const ThreadInput = ({ user, postThreads, inputText, setInputText }) => {
  return (
    <div className='popup-post-thread'>
      <p>{user.handle}</p>
      <input
        type='text'
        placeholder='Start a thread...'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={postThreads}>Post</button>
    </div>
  )
}

export default ThreadInput
