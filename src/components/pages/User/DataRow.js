import { useState } from "react";
import axios from "axios"

function DataRow() {
    const [rows, setRows] = useState([]);
    axios({
        method: "GET",
        url: "/UserDataRow",
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    })
    .then((response) => {
        setRows(response.data);
    }).catch((error) => {
        if(error.response){
            console.log("error: "+ error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    })
        
    const UserRows = [
        { id: 1, User_ID: 'test', User_Name: 'testname', User_Email: "test@naver.com" },
        { id: 2, User_ID: 'admin', User_Name: 'adminName', User_Email: "admin@naver.com" },
        // { id: 3, User_ID: '', User_Name: '', User_Email: "" },
    ];

    return rows;
}

export default DataRow;