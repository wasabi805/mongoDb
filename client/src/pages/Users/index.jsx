import React, {useEffect} from "react";
import axios from 'axios'

const Users = () => {

    const testServer = async()=>{
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:8080/api/users'
        }).then(res=>res).catch(err=>{
            console.log(err)
        })

        console.log('what is response', response)


    }

    useEffect(()=>{
        testServer()
    },[])


  return <div>Users</div>;
};

export default Users;
