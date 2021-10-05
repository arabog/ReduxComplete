/*import { createSlice } from "@reduxjs/toolkit"


export const userSlice = createSlice(
          {
                    name: "user",

                    initialState: {
                              name: "Anna",
                              email: "anna@gmail.com"
                    },

                    reducers: {
                              update: (state, action) => {
                                        state.name = action.payload.name
          
                                        state.email = action.payload.email
                              }, 

                              // remove: (state) => (state === {})
                              remove: (state) => (state === null)

                    },

          }
)


export const { update, remove } = userSlice.actions

export default userSlice.reducer
*/


/*--------------- with API ---------------*/ 
// /* 
import { createSlice } from "@reduxjs/toolkit"


export const userSlice = createSlice(
          {
                    name: "user",

                    initialState: {
                              userInfo: {
                                        name: "Anna",
                                        email: "anna@gmail.com"
                              },

                              // pending: false,
                              pending: null,

                              error: false
                    },

                    reducers: {
                              updateStart: (state) => {
                                        state.pending = true
                              },

                              updateSuccess:  (state, action) => {
                                        state.pending = false
                                        state.userInfo = action.payload
                              },

                              updateError: (state) => {
                                        state.error = true
                                        state.pending = false
                              },

                              remove: (state) => (state === {})

                    }
          },
)

export const { updateStart, updateSuccess, updateError, remove } = userSlice.actions

export default userSlice.reducer 
// */


/*---------------Using createAsyncThunk---------------*/ 
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"


// export const userSlice = createSlice(
//           {
//                     name: "user",

//                     initialState: {
//                               userInfo: {
//                                         name: "Anna",
//                                         email: "anna@gmail.com"
//                               },

//                               // pending: false,
//                               pending: null,

//                               error: false
//                     },

//                     reducers: {

//                               remove: (state) => (state === {})

//                     }
//           },
// )

// export const { updateStart, updateSuccess, updateError, remove } = userSlice.actions

// export default userSlice.reducer
