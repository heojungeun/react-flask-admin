import {useState} from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// style ref: https://aspdotnet.tistory.com/2674

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '50%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Login(props) {
    const classes = useStyles();
    const [loginForm, setLoginForm] = useState({
        loginid: "",
        loginpw: ""
    });
    const [unauth, setUnauth] = useState("")

    function loginMe(event){
        axios({
            method: "POST",
            url: "/token",
            data: {
                loginid: loginForm.loginid,
                loginpw: loginForm.loginpw
            }
        })
        .then((response) => {
            props.setToken(response.data.access_token);
            setUnauth("");
        })
        .catch((error) => {
            if(error.response){
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
                setUnauth("ID나 비밀번호가 틀렸습니다.");
            }
        });

        setLoginForm(({
            loginid: "",
            loginpw: ""
        }));

        event.preventDefault();
    }

    function handleChange(event){
        const {value, name} = event.target;
        setLoginForm(prevNote => ({...prevNote, [name]: value}))
    }

    return (
        <Grid container className={classes.root}>
        <CssBaseline />
        {/* <Grid item xs={false} md={7} className={classes.image} /> */}
        <Grid item xs={12} md={12} >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="loginid"
                onChange={handleChange}
                type="text"
                text={loginForm.loginid}
                name="loginid"
                placeholder='ID'
                value={loginForm.loginid} />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="loginpw"
                onChange={handleChange}
                type="password"
                text={loginForm.loginpw}
                name="loginpw"
                placeholder='Password'
                value={loginForm.loginpw} />
              <Typography variant="body1">{unauth}</Typography>
              <Button
                type="submit"
                onClick={loginMe}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    );

}

export default Login;