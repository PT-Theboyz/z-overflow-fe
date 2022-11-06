import PropType from 'prop-types';
import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material'
import styles from './style';

export default function Votes(props) {
  return (
    <div className="vote" css={styles.root}>
      <ArrowDropUp className="upvote" />
      <div className="total">
        {props.total}
      </div>
      <ArrowDropDown className="downvote" />
    </div>
  )
}

Votes.defaultProps = {
  total: 0
}

Votes.propType = {
  total: PropType.number
}