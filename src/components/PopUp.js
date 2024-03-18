import PopupThread from './PopupThread'
import ThreadInput from './ThreadInput'

const PopUp = ({
  user,
  setOpenPopup,
  popupThreads,
  inputText,
  setInputText,
  postThreads,
}) => {
  return (
    <>
      <div className='popup'>
        {popupThreads?.map((popupThread) => (
          <PopupThread key={popupThread.id} popupThread={popupThread} />
        ))}
        <ThreadInput
          user={user}
          popupThreads={popupThreads}
          inputText={inputText}
          setInputText={setInputText}
          postThreads={postThreads}
        />
      </div>
      <div id='backdrop' onClick={() => setOpenPopup(false)}></div>
    </>
  )
}

export default PopUp
