import { css } from "@emotion/react"

const styles = {
  //buat key sesuai kebutuhan tag atau yang lainnya
  root: css`

  .modal {
    position: 'absolute';
    top: '50%';
    left: '50%';
    transform: 'translate(-50%, -50%)';
    width: 400;
    bgcolor: 'background.paper';
    box-shadow: 24;
    border-radius: 10px;
    p: 4;
    display: 'flex';
    align-items: center;
    flex-direction: column;
  }
    
  
  `,
}

export default styles;