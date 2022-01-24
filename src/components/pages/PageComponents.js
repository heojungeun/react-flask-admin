import { lazy } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Home from './home/Home'
import User from './User/User'
import UserDetail from './UserDetail/UserDetail'
import Channels from './Channels/Channels'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flex: 4,
      padding: '20px'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    container: {
       flex: 4,
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }));

function PageComponents(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/user" element={<User />} />
                <Route exact path="/user/:userId" element={<UserDetail />} />
                <Route exact path="/channels" element={<Channels />} />
            </Routes>
        </div>  
    );
}

export default PageComponents;