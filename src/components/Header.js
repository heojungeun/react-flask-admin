import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useConfirm from '../utils/useConfirm'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    LogOutButton: {
      marginRight: theme.spacing(2),
    },
    titleBox: {
        justifyContent: 'space-between',
    },
    title: {
      
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    App_header: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    LogOutButton: {

    },
  }));


function Header(props) {
    const classes = useStyles();

    function logoutMe(){
        axios({
            method: "POST",
            url: "/logout"
        })
        .then((response) => {
            props.removeToken()
        }).catch((error) => {
            if(error.response){
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
        document.location.href = "/"
    }

    const useConfirmLogout = useConfirm(
        "로그아웃 하시겠습니까?",
        logoutMe,
        () => console.log("logout cancel")
    )

    return (
        <header className={classes.App_header}>
            {props.token && props.token !== "" && props.token !== undefined ? 
                (
                <AppBar position="static">
                    <Toolbar className={classes.titleBox}>
                        <Typography variant="h6" className={classes.title}>
                            Admin
                        </Typography>
                        <Button variant="contained"
                                className={classes.LogOutButton} 
                                onClick={useConfirmLogout}>
                            Logout
                        </Button> 
                    </Toolbar>
                </AppBar>
                )
                : <div></div>}
        </header>
    )
}

export default Header;