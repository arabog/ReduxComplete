import axios from "axios";
import { updateStart, updateSuccess, updateError, } from "./userSlice";


export const updateUser = async (userInfo, dispatch) => {
          
          dispatch(updateStart())

          try {
                    const res = await axios.post(
                              "http://localhost:3040/api/users/123/update",
                              
                              userInfo
                    )

                    dispatch(updateSuccess(res.data))

          } catch (err) {
                    dispatch(updateError())
          }
}