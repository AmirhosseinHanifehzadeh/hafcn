import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import PhoneIcon from '@mui/icons-material/Phone'; 
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../styles/ContactUs.css";

const theme = createTheme({
  direction: 'rtl',
});

function ContactUs() {
    const [name, setName] = useState(""); 
    const [message, setMessage] = useState(""); 

    const sendMessage = () => {
        const payload = {
            name: name,
            message: message,
        }

        console.log("payload: ", payload)
    }

    return (
        <div className="contactus-page">
            <h1 className="services-carts_title">تماس با ما</h1>
            <div className="container">
                <div className="infos__container">
                    <div className="infos_title">
                        <h1>اطلاعات تماس</h1>
                        <div>با اطلاعات زیر می توانید با ما در تماس باشید</div>
                    </div>
                    <div className="info">
                        <div><PhoneIcon className="icon" /></div>
                        <div>021 444 44 54</div>
                    </div>
                    <div className="info">
                        <div><EmailIcon className="icon" /></div> 
                        <div>hafcn@gmail.com</div>
                    </div>
                    <div className="info">
                        <div><LocationOnIcon className="icon" /> </div>
                        <div>تهران همین نزدیکی</div>
                    </div>
                </div>
                <div className="send-message__container" dir="rtl">
                    <ThemeProvider theme={theme}>
                        <TextField className="input" label="نام و نام خانوادگی" fullWidth={true}
                        style={{ margin: '20px 0' }}
                        onChange={event => setName(event.target.value)}/>
                        <TextField className="input" label="پیام" fullWidth={true} multiline
                        style={{ marginBottom: '20px' }}
                        rows={9}
                        onChange={event => setMessage(event.target.value)}/>
                    </ThemeProvider>
                    <button className="send-btn" onClick={sendMessage}>فرستادن پیام</button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
