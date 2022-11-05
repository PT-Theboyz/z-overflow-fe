import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

function StyledIconButton(props) {
  const router = useRouter();
  const handleRoute = () => router.push(props.link);
  if (props.link) {
    return (
      <a className="link" onClick={handleRoute}>
        <IconButton className={props.className}>
          {props.children}
        </IconButton>
      </a>
    )
  }
  return (
   <IconButton className={props.className}>
    {props.children}
   </IconButton> 
  )
}

export default styled(StyledIconButton)`
  color: ${props => props.active ? '#fff' : '#868ead'};
  background-color: ${props => props.active ? '#fe4401' : '#f4f6f8'};
  border-radius: 4px;
  width: ${props => props.width ? props.width + 'px' : 'initial'};
  height: ${props => props.height ? props.height + 'px' : 'initial'};
  :hover {
    color: #fff;
    background-color: #fe4401;  
  }
`// wajib ada props classname untuk emotion styled biar bisa inject

StyledIconButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  height: PropTypes.number,
  link: PropTypes.string,
  width: PropTypes.number,
};

StyledIconButton.defaultProps = {
  active: false,
  children: null,
  className: "",
  height: 0,
  link: "",
  width: 0,
};