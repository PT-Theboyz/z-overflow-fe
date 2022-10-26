import { css } from "@emotion/react"

const styles = {
  //buat key sesuai kebutuhan tag atau yang lainnya
  action: css`
    .action-field {
      border: solid 1px #eaeaea;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
    }

    button {
      padding: 8px 16px;
      border-radius: 4px;
      border: none;
      text-transform: none;
      color: black;
    }
    
    button:hover {
      cursor: pointer;
      background-color: #eaeaea;
    }

    .increment {
      margin-right: 8px;
      background-color: #96e9ff;
    }

    .decrement {
      background-color: red;
    }
  `,
  pokemon: css`
    width: 100%;
    display: flex;
    margin-top: 24px;
    .card {
      width: 33.33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 8px;
    }
    img {
      border-bottom: 1px solid #eaeaea;
    }
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      padding: 8px;
      font-weight: 700;
      font-size: 18px;
    },
    h3 {
      text-align: center;
    }
  `,
}

export default styles;
