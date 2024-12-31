import React from 'react'

const Header = (props) => {
  // const [username, setUsername] = useState('');

  // if(!data){
  //   setUsername("admin");
  // }else {
  //   setUsername(data.firstName);
  // }

  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser('');
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello ! <br /> <span className='text-3xl font-bold'>username 👋</span></h1>
      <button onClick={logOut} className='bg-red-600 rounded-sm px-5 py-2 font-medium text-lg text-white'>Log Out</button>
    </div>
  )
}

export default Header
