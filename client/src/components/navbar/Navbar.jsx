import React from 'react'

import { ArrowDropDown } from "@material-ui/icons"
import { useSelector } from 'react-redux'

import "./navbar.css"


export default function Navbar() {
          const name = useSelector(state => state.user.userInfo.name)

          
          return (
                    <div className="navbar">
                              <div className="navbarWrapper">
                                        <div className="navbarLeft">
                                                  <span className="logo">Arapp</span>
                                                  <span className="navbarLink">Home</span>
                                                  <span className="navbarLink">About</span>
                                                  <span className="navbarLink">Contact</span>
                                        </div>

                                        <div className="navbarCenter">
                                                  <div className="search">
                                                            <input 
                                                                      type="text"
                                                                      placeholder="search for something..."
                                                                      className="searchInput" 
                                                            />
                                                  </div>
                                        </div>

                                        <div className="navbarRight">
                                                  <img 
                                                            src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                                                            alt="" 
                                                            className="avatar" 
                                                  />

                                                  <span className="navbarName"> {name} </span>

                                                  <ArrowDropDown />
                                        </div>
                              </div>
                    </div>
          )
}
