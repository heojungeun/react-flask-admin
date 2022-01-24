import React, {useEffect, useState} from 'react';
import './user.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, PanoramaSharp } from '@material-ui/icons';
// @mui/x-data-grid install 시, @emotion/styled @emotion/react install 필요함
import { Link } from 'react-router-dom';
import axios from "axios"
// import DataRow from './DataRow';


function User(){
    const [rows, setRows] = useState([]);

    const columns = [
        { field: 'User_ID', headerName: 'User ID', width: 150 },
        { field: 'User_Name', headerName: 'User Name', width: 150 },
        { field: 'User_Email', headerName: 'User Email', width: 150 },
        { 
            field: 'action', 
            headerName: 'Action', 
            width: 150,
            renderCell: (param) => {
                return (
                    <>
                        <Link to={'/user/' + param.row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline 
                            className='userListDelete'
                            onClick={() => handleDelete(param.row.id)} />
                    </>
                )
            }
        },
    ];

    useEffect(() => {
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
    }, []);

    const handleDelete = (id) => {
        setRows(rows.filter((item) => item.id !== id))
    }

    return (
        <div className='User'>
            <h3 className='title'>User</h3>
            <div className='container'>
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid 
                        rows={rows} 
                        columns={columns} 
                        disableSelectionOnClick
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
}

export default User;