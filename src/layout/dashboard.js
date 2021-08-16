 import {useDispatch,useSelector} from 'react-redux'
import React,{useState,useEffect} from 'react'


const Dashboard = (props) => {
    const auth = useSelector(state =>state.auth)

    return (
        <div>
            {auth.user.fullName}
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard
