import { TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router' // правильно!
import google from '@/assets/Google.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Regist } from '@/store/reducers/registration/reducer'

export default function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [addName, setAddName] = useState('')
  const [addPhoneNumber, setAddPhoneNumber] = useState('')
  const [addEmail, setAddEmail] = useState('')
  const [addPassword, setAddPassword] = useState('')
  const [addConfiguePassword, setAddConfiguePassword] = useState('')

  async function handleAdd() {
    const newUser = {
      userName: addName,
      phoneNumber: addPhoneNumber,
      email: addEmail,
      password: addPassword,
      confirmPassword: addConfiguePassword,
    }

    const result = await dispatch(Regist(newUser))

    if (Regist.fulfilled.match(result)) {
      
      setAddName('')
      setAddPhoneNumber('')
      setAddEmail('')
      setAddPassword('')
      setAddConfiguePassword('')
      setTimeout(() => {
        navigate('/logIn')
      }, 0)
    } else {
      console.log('❌ Ошибка при регистрации', result.payload)
    }
  }

  return (
    <div className="md:w-[30%] px-[40px] m-auto text-start md:mt-[100px] mt-[30px]">
      <div className="sm:w-[100%]">
        <h1 className="md:text-[45px] text-[35px] font-bold">Create an account</h1>
        <p className="text-[24px]">Enter your details below</p>
      </div>

      <div className="mt-[20px]">
        <TextField
          label="Name"
          value={addName}
          onChange={e => setAddName(e.target.value)}
          className="w-[100%]"
          variant="outlined"
          sx={{ mt: '10px' }}
        />
        <TextField
          label="Phone number"
          value={addPhoneNumber}
          onChange={e => setAddPhoneNumber(e.target.value)}
          className="w-[100%]"
          variant="outlined"
          sx={{ mt: '10px' }}
        />
        <TextField
          label="Email"
          value={addEmail}
          onChange={e => setAddEmail(e.target.value)}
          className="w-[100%]"
          variant="outlined"
          sx={{ mt: '10px' }}
        />
        <TextField
          label="Password"
          type="password"
          value={addPassword}
          onChange={e => setAddPassword(e.target.value)}
          className="w-[100%]"
          variant="outlined"
          sx={{ mt: '10px' }}
        />
        <TextField
          label="Confirm password"
          type="password"
          value={addConfiguePassword}
          onChange={e => setAddConfiguePassword(e.target.value)}
          className="w-[100%]"
          variant="outlined"
          sx={{ mt: '10px' }}
        />
        <button
          onClick={handleAdd}
          className="bg-red-400 text-white w-[100%] h-[7vh] mt-[20px] rounded-[10px]"
        >
          Create Account
        </button>
        <button className="text-white w-[100%] h-[6vh] mt-[20px] rounded-[10px] flex justify-center items-center border-[1px] border-solid border-black gap-[10px] p-[25px]">
          <img src={google} alt="" />
          <p className="text-black">Sign up with Google</p>
        </button>
      </div>

      <div className="text-center mt-[20px] flex justify-center gap-[10px]">
        <span className="text-[20px]">Already have account?</span>
        <Link className="text-violet-600 text-[20px]" to="/logIn">
          LogIn
        </Link>
      </div>
    </div>
  )
}
