import { lazy } from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
    //   flexGrow: 1,
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }));

function Main(props){
    const classes = useStyles();
    const token = props.token;

    return (
        
        <>
            {/* <Routes> 
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard/Default" component={DashboardDefault} />
            </Routes> */}
            <div className={classes.root}>
                
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                    {/* <Avatar src={user.avatar} className={classes.large} />
                    
                    Welcome {user.fname} {user.lname} */}
                    <Typography variant="h5">
                        Welcome!
                    </Typography>
                    </CardContent>
                </Card>
            </div>  
        </>
    );
}

export default Main;