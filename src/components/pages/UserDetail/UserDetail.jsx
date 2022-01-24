import React, {useState} from 'react';
import './userdetail.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, MailOutline, PanoramaSharp, PermIdentity } from '@material-ui/icons';
// @mui/x-data-grid install 시, @emotion/styled @emotion/react install 필요함
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';



function UserDetail(){

    return (
        <div className='User'>
            <div className='userTitleContainer'>
                <h2 className='title'>Edit User</h2>
                <Link to="/newUser">
                    <Button 
                        className='userAddButton'
                        variant='contained'
                        size="medium">
                            Create
                    </Button>
                </Link>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className="userShowTop">
                        <span className="userShowName">
                            가나다
                        </span>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">
                            Account Details
                        </span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon' />
                            <span className="userShowInfoTitle">유저이름</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon' />
                            <span className="userShowInfoTitle">유저이메일</span>
                        </div>
                    </div>
                </div>
                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateItem">
                            <label>UserName</label>
                            <input 
                                type="text" 
                                placeholder='UserName'
                                className='userUpdateInput'
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input 
                                type="text" 
                                placeholder='Email'
                                className='userUpdateInput'
                            />
                        </div>
                        <Button 
                            variant='contained'
                            className="userUpdateButton">
                                Update
                        </Button>
                        {/* <div className="userUpdateItem">
                            <label>PassWord</label>
                            <input 
                                type="password" 
                                placeholder='password'
                                className='userUpdateInput'
                            />
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserDetail;