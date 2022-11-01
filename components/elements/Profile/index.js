import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { IconButton, Avatar, Button } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

export default function Profile() {
  return (
    <Button css={styles.root} className={`profile`}>
      <Avatar className="avatar">
        DR
      </Avatar>
      <span className="name">Doctor Rozoq</span>
      <ExpandMore />
    </Button>
  )
}

Profile.propTypes = {};

Profile.defaultProps = {};