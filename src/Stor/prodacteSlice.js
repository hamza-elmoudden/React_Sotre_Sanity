import { createSlice } from "@reduxjs/toolkit"
import {client} from "../Sanity/Client"

const initialState = []

async function getprodatcet(){
    const data = await client.fetch(`
    *[_type == 'prodacte']{
      _id,
      title,
      price,
      image_one{
        asset{
          _ref,
          _type
        }
      },
      image_three,
      image_tow,
    }
    `)
    initialState.push(data)
    
}

await getprodatcet()
  
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

     
    },
})
  
  
export default counterSlice.reducer