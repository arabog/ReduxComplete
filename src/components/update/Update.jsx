import React from 'react'
import "./update.css"
import Warning from '../warning/Warning'


export default function Update() {


          return (
                    <div className="update">
                              <div className="updateWrapper">
                                        <h3 className="updateTitle">Update Your Account</h3>

                                        <Warning />

                                        <button className="deleteBtn">Delete Account</button>

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
                                                                                placeholder="Enter your username"
                                                                                id="username"
                                                                                className="formInput"
                                                                      />
                                                            </div>

                                                            <div className="formItem">
                                                                      <label htmlFor="email">Email</label>

                                                                      <input 
                                                                                type="text" 
                                                                                placeholder="Enter your email"
                                                                                id="email"
                                                                                className="formInput"
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
                                                            >
                                                                      Update
                                                            </button>
                                                  </form>
                                        </div>
                              </div>
                    </div>
          )
}
