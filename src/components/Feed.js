import Thread from './Thread'

const Feed = ({
  user,
  filteredThreads,
  setOpenPopup,
  getThreads,
  getReplies,
  setInteractingThread,
}) => {
  return (
    <div className='feed'>
      {filteredThreads?.map((filteredThread) => (
        <Thread
          key={filteredThread.id}
          user={user}
          filteredThread={filteredThread}
          setOpenPopup={setOpenPopup}
          getThreads={getThreads}
          getReplies={getReplies}
          setInteractingThread={setInteractingThread}
        />
      ))}
    </div>
  )
}

export default Feed
