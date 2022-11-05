import { css } from "@emotion/react"

const styles = {
  //buat key sesuai kebutuhan tag atau yang lainnya
  root: css`
    align-items: center;
    justify-content: space-around;
    display: flex;
    padding: 8px 16px;
    border-radius: 8px;
    min-width: 150px;
    text-transform: none;

    :hover {
      background-color: #eaeaea;
    }

    .avatar {
      background-color: #ff4401;
      font-weight: 600;
      font-size: 12px;
      margin-right: 8px;
      height: 35px;
      width: 35px;
    }

    .name {
      color: black;
      font-weight: 700;
      margin-left: 8px;
      margin-right: 8px;
    }

    .btn {
      background-color: #fe4401;
    }
  `,
}

export default styles;
