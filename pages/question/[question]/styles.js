import { css } from "@emotion/react"
import { orange } from "../../../styles/color";

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

    .board {
      padding: 20px;
    }

    .board > header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
      padding-bottom: 24px;
      border-bottom: 1px solid #989fb0;
    }

    .board > header > button {
      background-color: ${orange};
      color: #fff;
      text-transform: none;
      padding: 8px 12px;
      font-weight: 500;
      height: 40px;
    }

    .question-head > .title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .question-head > .stats {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .question-head > .stats > .stat {
      margin-right: 8px;
      font-size: 12px;
    }

    .question-head > .stats > .stat > span {
      font-weight: 700;
    }

    .question-detail {
      display: flex;
    }

    .vote {
      text-align: center;
      margin-right: 12px;
    }

    .vote > .total {
      font-size: 22px;
      font-weight: 500;
    }
    
    .upvote {
      cursor: pointer;
      width: 78px;
      height: 78px;
      margin-bottom: -18px;
      margin-top: -4px;
    }

    .upvote:hover {
      color: ${orange};
    }

    .downvote:hover {
      color: ${orange};
    }

    .downvote {
      cursor: pointer;
      width: 78px;
      height: 78px;
      margin-top: -12px
    }

    .detail-tags {
      display: flex;
      flex-wrap: wrap;
      margin-top: 36px;
    }

    .detail-tags > .tag {
      margin-right: 8px;
      margin-bottom: 8px;
      background-color: #f4f6f8;
      color: #989fb0;
      padding: 4px 12px;
      border-radius: 4px;
      cursor: pointer;
    }

    .questioner {
      display: flex;
      margin-top: 8px;
    }

    .answerer {
      display: flex;
      margin-top: 24px;
    }

    .questioner-info {
      margin-left: auto;
    }

    .questioner-info > span {
      font-weight: 600;
    }
    .answerer-info {
      margin-left: auto;
    }

    .answerer-info > span {
      font-weight: 600;
    }

    .answers {
      margin-top: 62px;
    }

    .answers > header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .total-answer {
      margin-left: 24px;
      font-size: 24px;
      font-weight: 500;
    }

    .sorting {
      display: flex;
      align-items: center;
    }

    .formcontrol-select {
      width: 180px;
    }

    .answer-detail {
      display: flex;
    }

    .detail {
      width: 100%;
    }

    pre {
      background-color: #f7f7f7;
      padding: 8px;
    }
  `,
}

export default styles;
