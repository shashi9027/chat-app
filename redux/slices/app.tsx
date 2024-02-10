"use client"
import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store"
import { Sidebar } from "phosphor-react";

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT",
    }
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleSidebar(state, action) {
            state.sidebar.open != state.sidebar.open   
        },
        updateSidebarType(state, action){
           state.sidebar.type = action.payload.type
        }
    }
})

export default slice.reducer