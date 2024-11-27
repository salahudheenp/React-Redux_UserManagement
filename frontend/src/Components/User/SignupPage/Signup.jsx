import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { userSignup } from '../../../REDUX/Actions/userActions'
import './Signup.css'
import Dropdown from 'react-bootstrap/Dropdown';


function Signup() {
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [leadSource, setleadSource] = useState('')
  const [mobNo, setMobNo] = useState('')
  const Signup = useSelector(state => state.userSignup)
  const { loading, error, userInfo } = Signup;
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    dispatch(userSignup(firstname, lastname, email, password,leadSource,mobNo))
  }

  useEffect(() => {
    let userinfo = localStorage.getItem("userInfo")
    if (userinfo) {
      navigate("/")
    }
    console.log("HEHHEH");
    if (userInfo) {
      navigate("/login")
    }
  }, [userInfo])
  console.log(userInfo);

  const handleLeadSource = (e) => {
    setleadSource(e.target.textContent)
  }

  return (
    <div>
      <>
        <div className='bagrounds' >
          {/* <div className='logos'>
          <img className='logoimg ' src="https://o.remove.bg/downloads/4e297bca-fee6-495b-8329-880e54b0db67/pencil-logo-vector-template-design-pencil-logo-vector-164600193-removebg-preview.png" alt="" />
        </div> */}
          <div className='forms' >

            <div className='formcontainers '>

              <form action="">
                <p className='login'>SIGNUP</p>

                {
                  error ? <Alert variant='danger'>
                    <strong style={{ color: "red" }}>{error} </strong>
                  </Alert> : ""
                }

                {
                  loading ? <h1>Loading....</h1> : ''
                }

                <input onChange={(e) => {
                  setfirstname(e.target.value)
                }} className='input' type="text" name="Firstname" id="" placeholder='Firstname' style={{height:'35px'}}/>
                <br />
                <input onChange={(e) => {
                  setlastname(e.target.value)
                }} className='input1' type="text" name="email" id="" placeholder='Lastname' style={{height:'35px'}}/>
                <br />
                <input onChange={(e) => {
                  setEmail(e.target.value)
                }} className='input1' type="email" name="email" id="" placeholder='Email' style={{height:'35px'}}/>
                <br />
                {/* <input onChange={(e) => {
                  setMobNo(e.target.value)
                }} className='input1' type="number" name='phoneNo' placeholder='PhoneNumber' style={{height:'35px'}}/> */}
                <br />
                <input onChange={(e) => {
                  setPassword(e.target.value)
                }} className='input1' type="password" name='password' placeholder='Password...' style={{height:'35px'}}/>
                <div className='mt-2'>
                <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Lead Source 
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleLeadSource}>Direct</Dropdown.Item>
        <Dropdown.Item>
          referral 
          <input onChange={(e) => {
            setleadSource(e.target.value)
          }} className='input1' type="text" name='referral' placeholder='referral' style={{height:'35px',width:'150px',display:leadSource==='referral'?'block':'none'}}/>
         </Dropdown.Item>
          <input onChange={(e) => {
                  setleadSource(e.target.value)
                }} className='input1' type="text" name='referral' placeholder='referral' style={{height:'35px',width:'150px'}}/>
         {/* </Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
                </div>
               
                <p className='fp'>Forgot Passowrd ...?</p>
               
                <div className='buttons' style={{margin:5}}>

                  <button onClick={handlesubmit} className='button1' style={{backgroundColor:'green'}}>Submit</button>
                  <Link to={'/login'}>
                    <button className='button2 mt-2' style={{backgroundColor:'black'}}>Login</button>
                  </Link>
                </div>
              </form>
            </div>

          </div>
        </div>
      </>
    </div>
  )
}

export default Signup

