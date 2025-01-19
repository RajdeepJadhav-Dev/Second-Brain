
import { useRef, useState } from 'react';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'


export function Signup() {
  const navigate = useNavigate()
  const usernameref = useRef();
  const passwordref = useRef();
  const [error, setError] = useState('');  // To store error messages

  async function signup() {
    const username = usernameref.current.value;
    const password = passwordref.current.value;

    try {
      const res = await axios.post('http://localhost:3000/signup', {
        username,
        password,
      });

      // If successful, alert success message
      alert(res.data.msg);
      setError('');  // Clear any existing error message
      navigate('/signin')

    } catch (err) {
      // Catch error from Axios and handle the response
      if (err.response && err.response.data) {
        setError(err.response.data.msg);  // Set the error message from backend
      } else {
        setError('An unknown error occurred');
      }
    }
  }

  return (
 <>
      <div className='bg-cover font-sans bg-no-repeat relative z-0 bg-center h-screen' style={{backgroundImage: "url('/images/Screenshot 2025-01-18 202749.png')"}}></div>
    <div className='absolute top-0 left-0 w-full h-screen bg-black/55'>
      <div className='flex justify-center items-center h-screen '>
       <div className='p-8 text-white bg-transparent border border-white rounded-lg shadow-lg w-96'>
        <h1 className='text-4xl font-semibold text-center'>Signup</h1>
        <div className='flex flex-col mt-2'>
          <label className='mb-1 text-xl font-semibold ' htmlFor='username'>username</label>
          <input ref={usernameref} className='px-2 py-1 text-white  bg-transparent border border-white focus:outline-none focus:ring-0 focus:border-white' id='username' type="text" placeholder='enter username' />
    <div className='flex flex-col mt-2'>
      <label className='mb-1 text-xl font-semibold' htmlFor='password'>password</label>
      <input ref={passwordref} id='password' className='px-2 py-1 text-white bg-transparent border border-white focus:outline-none focus:ring-0 focus:border-white' type="password"  placeholder='enter password' />
    </div>
    <div className='flex flex-col items-center mt-2'>
      <button onClick={signup} className='w-full py-2 mt-6 text-white bg-1 border-1 rounded-full hover:text-white'>Signup</button>
    <Link to="/signin" className='mt-2'>click here to login</Link>
    </div>
        {error && <div className="text-red-500">{error}</div>}
        </div>
        </div>
      </div>
    </div>

       
      
      </>
  );
}


export function Signin(){
    const navigate = useNavigate();
    const usernameref = useRef();
    const passwordref = useRef();

    async function signin(){
        const username = usernameref.current.value;
        const password = passwordref.current.value;
        const res = await axios.post('http://localhost:3000/signin',{
            username:username,
            password:password
        })
        if (res.data.token) {
            const jwt = res.data.token;
            // Store the token in localStorage
            localStorage.setItem('token', jwt);
            // Navigate to the home page if the token is valid
            navigate('/dashboard');
          } else {
            // If no token is returned, display an error
            alert('Invalid credentials');
    }
    }

    return (
      <>
      <div className='bg-cover font-sans bg-no-repeat relative z-0 bg-center h-screen' style={{backgroundImage: "url('/images/Screenshot 2025-01-18 202749.png')"}}></div>
      <div className='absolute top-0 left-0 w-full h-screen bg-black/55'>
        <div className='flex justify-center items-center h-screen '>
         <div className='p-8 text-white bg-transparent border border-white rounded-lg shadow-lg w-96'>
          <h1 className='text-4xl font-semibold text-center'>Login</h1>
          <div className='flex flex-col mt-2'>
            <label className='mb-1 text-xl font-semibold ' htmlFor='username'>username</label>
            <input ref={usernameref} className='px-2 py-1 text-white  bg-transparent border border-white focus:outline-none focus:ring-0 focus:border-white' id='username' type="text" placeholder='enter username' />
      <div className='flex flex-col mt-2'>
        <label className='mb-1 text-xl font-semibold' htmlFor='password'>password</label>
        <input ref={passwordref} id='password' className='px-2 py-1 text-white bg-transparent border border-white focus:outline-none focus:ring-0 focus:border-white' type="password"  placeholder='enter password' />
      </div>
      <div className='flex flex-col items-center mt-2'>
        <button onClick={signin} className='w-full py-2 mt-6 text-white bg-1 border-1 rounded-full hover:text-white'>Login</button>
      </div>
          </div>
          </div>
        </div>
      </div>
      </>
      );
    }
    