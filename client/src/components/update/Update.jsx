import React, { useState } from 'react'
import "./update.css"
import Warning from '../warning/Warning'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../redux/userSlice'
import { updateUser } from '../../redux/apiCalls'


export default function Update() {
          const [name, setName] = useState("")
          const [email, setEmail] = useState("")

          const { userInfo, pending, error } = useSelector(state => state.user)

          const dispatch = useDispatch()

          const handleUpdate = (e) => {
                    e.preventDefault()

                    // dispatch(update( { name, email } ))

                    updateUser(
                              {name, email},
                              dispatch
                    )
          }

          const handleDelete =(e) => {
                    e.preventDefault()

                    dispatch(remove())
          }

          return (
                    <div className="update">
                              <div className="updateWrapper">
                                        <h3 className="updateTitle">Update Your Account</h3>

                                        <Warning />

                                        <button 
                                                  className="deleteBtn"
                                                  onClick = {handleDelete}
                                        >
                                                  Delete Account
                                        </button>

                                        <div className="updateContainer">
                                                  <form >
                                                            <div className="formItem">
                                                                      <label htmlFor="profilepic">Profile Picture</label>

                                                                      <div id="profilepic" className="profilePic">
                                                                                <img 
                                                                                          src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                                                                                          alt="profilepic" 
                                                                                          className="avatar" 
                                                                                />

                                                                                <span className="change">Change</span>
                                                                      </div>
                                                            </div>

                                                            <div className="formItem">
                                                                      <label htmlFor="username">Username</label>

                                                                      <input 
                                                                                type="text" 
                                                                                placeholder= {userInfo.name}
                                                                                id="username"
                                                                                className="formInput"
                                                                                onChange={e => setName(e.target.value)}
                                                                      />
                                                            </div>

                                                            <div className="formItem">
                                                                      <label htmlFor="email">Email</label>

                                                                      <input 
                                                                                type="text" 
                                                                                placeholder= {userInfo.email}
                                                                                id="email"
                                                                                className="formInput"
                                                                                onChange={e => setEmail(e.target.value)}
                                                                      />
                                                            </div>

                                                            <div className="formItem">
                                                                      <label htmlFor="password">Password</label>

                                                                      <input 
                                                                                type="password" 
                                                                                id="password"
                                                                                className="formInput"
                                                                      />
                                                            </div>

                                                            <button 
                                                                      className="updateBtn"
                                                                      onClick = {handleUpdate}
                                                                      disabled = {pending}
                                                            >
                                                                      Update
                                                            </button>

                                                  </form>

                                        </div>
                                        
                                        {
                                                  error && <span className="error">Something went wrong</span>
                                        }

                                        {
                                                  pending === false && <span className="success">Account Updated</span>
                                        }
                              </div>
                    </div>
          )
}
