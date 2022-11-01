import { css } from "@emotion/react"

const styles = {
  //buat key sesuai kebutuhan tag atau yang lainnya
  nav: css`
    align-items: center;
    display: flex;
    padding: 18px 36px;
    background-color: white;

    .title {
      margin-right: 10%;
      font-size: 24px;
    }
    .action-fields {
      display: flex;
      width: 50%;
      height: 40px;
      align-items: center;
    }

    .textfield {
      width: 70%;
      margin-left: auto;
    }

    .MuiInputBase-root {
      height: 40px;
    }

    .notif {
      margin-right: 10px;
      margin-left: auto;
    }
  `,
}

export default styles;
