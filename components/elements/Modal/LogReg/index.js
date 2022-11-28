import {React, useState} from 'react';
import Box from '@mui/material/Box';
import styles from './styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1500,
    height: 750,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "10px",
    p: 4,
    display: 'flex',
    alignItems: "center",
    flexDirection: "column",
  };

  const box2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "10px",
    p: 4,
    display: 'flex',
    alignItems: "center",
    flexDirection: "column",
  };

export default function LogReg(prop) {
    const [status,setStatus] = useState(true);
    const handleRegister = () => setStatus(false);
    const handleLogin = () => setStatus(true);
  return (
    <div >
        {status ? <Modal
            open={prop.stat}
            onClose={prop.close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
            <Button variant="text" onClick={prop.close}>close</Button>
                <Box sx={box2}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{marginBottom:"30px"}} >
                        Login
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="standard-basic" label="Email" variant="standard" sx={{width:"280px"}} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="standard-basic" label="Password" variant="standard" type="password" sx={{width:"280px"}} />
                    </Box>
                    <Button variant="contained" sx={{marginTop:"20px", backgroundColor:"#fe4401"}} onClick={prop.close} >Login</Button>
                    <Button size="small" onClick={handleRegister} sx={{marginTop:"50px", color:"#fe4401"}}>Register</Button>
                </Box>
            </Box>
        </Modal> : 
        <Modal
            open={prop.stat}
            onClose={prop.close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Box sx={box2}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{marginBottom:"30px"}}>
                        Register   
                    </Typography>
                    <TextField id="standard-basic" label="Username" variant="standard" sx={{width:"280px"}} />
                    <TextField id="standard-basic" label="Email" variant="standard" sx={{width:"280px"}} />
                    <TextField id="standard-basic" label="Password" variant="standard" sx={{width:"280px"}} />
                    
                    <Typography variant="caption" display="block" gutterBottom sx={{width:"280px", display:"flex", alignItems:"flex-end"}}>
                        forgot password
                    </Typography>
                    
                    <Button variant="contained" sx={{marginTop:"20px", backgroundColor:"#fe4401",}} onClick={prop.close}>Register</Button>
                    <Button size="small" onClick={handleLogin} sx={{marginTop:"50px", color:"#fe4401"}} >Login</Button>
                </Box>
                
                
            </Box>
        </Modal>
        }
    </div>
  )
}
