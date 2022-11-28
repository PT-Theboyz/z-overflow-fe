import {React, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { IconButton, Avatar, Button } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import LogReg from '../Modal/LogReg/index'
// import Register from '../Modal/register'

export default function Profile() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  // localStorage.setItem('user', 'terkoiz');
  // const user = localStorage.getItem('user');

  const user = false;

  return (
    <div>
      {user ? <Button css={styles.root} className={`profile`} >
        <Avatar className="avatar">
          DR
        </Avatar>
        <span className="name">Doctor Rozoq</span>
        <ExpandMore />
      </Button> :
      <Button variant="contained" onClick={handleOpen} sx={{backgroundColor:"#fe4401"}}>login</Button>}
      <LogReg stat={open} close={handleClose} />
    </div> 
  )
}

Profile.propTypes = {};

Profile.defaultProps = {};