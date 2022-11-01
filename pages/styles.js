import { css } from "@emotion/react"

const styles = {
  //buat key sesuai kebutuhan tag atau yang lainnya
  root: css`
    display: flex;
    padding: 18px 32px;

    aside {
      width: 20%;
    }

    .body {
      width: 80%;
    }

    .MuiPaper-root {
      border-radius: 8px;
      margin-left: 12px;
      margin-right: 12px;
    }

    .popular-tags {
      padding: 20px;
    }

    .popular-tags > .head {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    .popular-tags > .tags {
      display: flex;
      flex-wrap: wrap;
    }

    .popular-tags > .tags > .tag {
      margin-right: 8px;
      margin-bottom: 8px;
      background-color: #f4f6f8;
      color: #989fb0;
      padding: 4px 12px;
      border-radius: 4px;
      cursor: pointer;
    }

    .question {
      display: flex;
      padding: 20px;
      width: 100%;
      margin-bottom: 24px;
    }

    .title {
      margin-bottom: 16px;
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
    }

    .title:hover {
      color: blue;
    }

    .question-tags > span {
      margin-left: 4px;
      margin-right: 4px;
      background-color: #f4f6f8;
      color: #989fb0;
      padding: 4px 12px;
      border-radius: 4px;
    }

    .description {
      width: 100%;
    }

    .user {
      display: flex;
      justify-content: flex-end;
    }
    .user > .name {
      font-weight: 500;
      margin-right: 4px;
    }

    .question-tags > span:first-of-type {
      margin-left: 0px;
    }

    .question-tags > span:last-of-type {
      margin-right: 0px;
    }
  
    .stats {
      margin-right: 32px;
      width: 10%;
    }
  `,
}

export default styles;
