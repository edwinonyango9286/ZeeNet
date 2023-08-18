import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
const userDefaultSTate ={
    _id:null,
    firstname:null,
    lastname:null,
    email:null,
    mobile:null,
    token:null,
};


const initialState={
    user:userDefaultSTate,
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{}
});