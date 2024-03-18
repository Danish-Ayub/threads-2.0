const Nav = ({ openPopup, postThread }) => {
  return (
    <nav>
      <button type='button' onClick={postThread}>
        <svg aria-label="Create" role="img" viewBox="0 0 26 26"><path d="M22.75 13L22.75 13.15C22.75 16.5103 22.75 18.1905 22.096 19.4739C21.5208 20.6029 20.6029 21.5208 19.4739 22.096C18.1905 22.75 16.5103 22.75 13.15 22.75L12.85 22.75C9.48969 22.75 7.80953 22.75 6.52606 22.096C5.39708 21.5208 4.4792 20.6029 3.90396 19.4739C3.25 18.1905 3.25 16.5103 3.25 13.15L3.25 12.85C3.25 9.48968 3.25 7.80953 3.90396 6.52606C4.4792 5.39708 5.39708 4.4792 6.52606 3.90396C7.80953 3.25 9.48968 3.25 12.85 3.25L13 3.25" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path><path d="M21.75 4.25L13.75 12.25" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path></svg>
      </button>
      <button type='button' className="active">
        <svg aria-label="Profile" role="img" viewBox="0 0 26 26"><circle cx="13" cy="7.25" r="4" stroke="currentColor" stroke-width="2.5"></circle><path d="M6.26678 23.75H19.744C21.603 23.75 22.5 23.2186 22.5 22.0673C22.5 19.3712 18.8038 15.75 13 15.75C7.19625 15.75 3.5 19.3712 3.5 22.0673C3.5 23.2186 4.39704 23.75 6.26678 23.75Z" stroke="currentColor" stroke-width="2.5"></path></svg>
      </button>
    </nav>
  )
}

export default Nav
