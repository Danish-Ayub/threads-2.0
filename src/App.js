import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Feed from './components/Feed'
import PopUp from './components/PopUp'

const App = () => {
  const [user, setUser] = useState(null)
  const [threads, setThreads] = useState(null)
  const [viewThreadsFeed, setThreadsFeed] = useState(true)
  const [filteredThreads, setFilteredThreads] = useState([])
  const [openPopup, setOpenPopup] = useState(false)
  const [interactingThread, setInteractingThread] = useState(null)
  const [popupThreads, setPopupThreads] = useState(null)
  const [inputText, setInputText] = useState('')

  const userId = '0c8e75b6-2b8d-47d1-bd57-f450e9dba51d'

  const getUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/users?user_uuid=${userId}`
      )
      const data = await response.json()
      setUser(data[0])
      // console.log(data[0])
    } catch (error) {
      console.log('getUser: ', error)
    }
  }

  const getThreads = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/threads?threads_from=${userId}`
      )
      const data = await response.json()
      setThreads(data)
    } catch (error) {
      console.log('getThreads: ', error)
    }
  }

  const getThreadsFeed = () => {
    if (viewThreadsFeed) {
      const standAloneThreads = threads?.filter(
        (thread) => thread.reply_to === null
      )
      setFilteredThreads(standAloneThreads)
    } else if (!viewThreadsFeed) {
      const replyToThread = threads?.filter(
        (thread) => thread.reply_to !== null
      )
      setFilteredThreads(replyToThread)
    }
  }

  const getReplies = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/threads?reply_to=${interactingThread?.id}`
      )
      const data = await response.json()
      setPopupThreads(data)
    } catch (error) {
      console.error('getReplies: ', error)
    }
  }

  const postThreads = async () => {
    const thread = {
      timestamp: new Date(),
      threads_from: user.user_uuid,
      threads_to: user.user_id || null,
      reply_to: interactingThread?.id || null,
      text: inputText,
      likes: [],
    }

    try {
      const response = await fetch('http://localhost:3000/threads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(thread),
      })
      const data = await response.json()
      getThreads()
      getReplies()
      setInputText('')
    } catch (error) {
      console.error('postThreads: ', error)
    }
  }

  const postThread = () => {
    setPopupThreads(null)
    setInteractingThread(null)
    setInputText('')
    setOpenPopup(true)
  }

  useEffect(() => {
    getReplies()
  }, [interactingThread])

  useEffect(() => {
    getUser()
    getThreads()
  }, [])

  useEffect(() => {
    getThreadsFeed()
  }, [user, threads, viewThreadsFeed])

  return (
    <>
      {user && (
        <div className='app'>
          <Nav
            instaUrl={user.instagram_url}
            openPopup={openPopup}
            postThread={postThread}
          />
          <Header
            user={user}
            viewThreadsFeed={viewThreadsFeed}
            setThreadsFeed={setThreadsFeed}
          />
          <Feed
            user={user}
            filteredThreads={filteredThreads}
            setOpenPopup={setOpenPopup}
            getThreads={getThreads}
            getReplies={getReplies}
            setInteractingThread={setInteractingThread}
          />
          {openPopup && (
            <PopUp
              user={user}
              setOpenPopup={setOpenPopup}
              popupThreads={popupThreads}
              inputText={inputText}
              setInputText={setInputText}
              postThreads={postThreads}
            />
          )}
        </div>
      )}
    </>
  )
}

export default App
