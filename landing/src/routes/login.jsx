import React, { useState } from "react"; 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

//styles
import "../styles/login.css"

function Login() {
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState(""); 
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    const theme = createTheme({
        direction: 'rtl',
    });

    const loginUser = () => {
        const payload = {
            "mobile": mobile,
            "password": password,
        }

        console.log("payload: ", payload)
    }

    return (
        <div className="login-page">
            <div className="login__container">
                <h1 className="title">ورود</h1>
                <ThemeProvider theme={theme}>
                    <TextField className="input" label="شماره موبایل" fullWidth={true}
                        style={{ margin: '20px 0' }}
                        onChange={event => setMobile(event.target.value)}/>
                </ThemeProvider>
                <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">رمز ورود</InputLabel>
                        <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        />
                </FormControl>
                <button className="login-btn" onClick={loginUser}>ورود</button>
                <button className="signup-btn">
                    <Link to={`/signup`} className="link">حساب کاربری ندارید؟ ثبت نام کنید</Link>
                </button>
            </div>
        </div>
    )
}

export default Login;
