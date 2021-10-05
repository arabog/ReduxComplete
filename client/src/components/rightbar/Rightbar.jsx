import React from 'react'
import "./rightbar.css"
import Recommendation from '../recommendation/Recommendation'
import { ArrowDropDown } from "@material-ui/icons"

export default function Rightbar() {

          
          return (
                    <div className="rightbar">
                              <div className="rightbarWrapper">
                                        <Recommendation type= "user" />
                                        <Recommendation type="popular" />
                                        <Recommendation type="editor" />

                                        <button className="rightButton">
                                                  See More
                                                  <ArrowDropDown />
                                        </button>
                              </div>
                    </div>
          )
}
