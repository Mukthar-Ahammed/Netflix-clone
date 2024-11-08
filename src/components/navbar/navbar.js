import React from 'react'

function Navbar() {
  return (
    <div className='nav'>
      <img className='logo' src="https://i.pinimg.com/564x/79/e6/92/79e6929499e441d1e6464bae047d9070.jpg" alt="Logo" />
      <img className='avatar' src="https://i.pinimg.com/736x/e4/6e/c0/e46ec04238a0613900385043239267a6.jpg" alt="Avatar" />
        <ul>
            <li><i className="fa-solid fa-magnifying-glass"></i></li>
            <li>Home</li>
            <li>Show</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default Navbar
