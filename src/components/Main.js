import { lazy } from 'react'
import {Route, Routes} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Sidebar from './sidebar/Sidebar';
import PageComponents from './pages/PageComponents';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
}));

function Main(props){
    const classes = useStyles();
    const token = props.token;

    return (
        <>
            <div className={classes.root}>
                <Sidebar />
                <PageComponents />
                {/* <Card className={classes.container} variant="outlined">
                    <CardContent>
                    
                    <Typography variant="h5">
                        Welcome!
                    </Typography>
                    </CardContent>
                </Card> */}
                {/* <Avatar src={user.avatar} className={classes.large} />
                    
                    Welcome {user.fname} {user.lname} */}
            </div>  
        </>
    );
}

export default Main;