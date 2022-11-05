import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Profile from '../Profile';
import { TextField, InputAdornment } from '@mui/material';
import { Home, Notifications, Search } from '@mui/icons-material';
import StyledIconButton from '../StyledIconButton';
import Link from 'next/link'

export default function TopNav() {
  return (
    <nav css={styles.nav}>
      <div className="title">
        Z-Overflow
      </div>
      <div className="action-fields">
          <StyledIconButton link="/">
            <Home />
          </StyledIconButton>
        <TextField
          className="textfield"
          InputProps={{
            endAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
          }}
          placeholder="Type here to search..."
          variant="outlined"
        />
      </div>
      <StyledIconButton className="notif">
        <Notifications />
      </StyledIconButton>
      <Profile />
    </nav>
  )
}

TopNav.propTypes = {};

TopNav.defaultProps = {};