import { css } from "@emotion/react"
import { orange } from "../../../styles/color";

const styles = {
  //buat key sesuai kebutuhan tag atau yang lainnya
  root: css`
    text-align: center;
    margin-right: 12px;

  .total {
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
  `,
}

export default styles;
