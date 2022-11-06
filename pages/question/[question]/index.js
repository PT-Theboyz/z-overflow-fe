import TopNav from "../../../components/elements/TopNav";
import { Paper, Button, FormControl, Select, MenuItem } from "@mui/material";
import EditorAnswer from "../../../components/fragments/EditorAnswer"; //in fragments
import Votes from "../../../components/elements/Votes";
import styles from './styles';
import PropTypes from 'prop-types';
import { useState } from "react";

export default function Question() {
  return (
    <>
      <TopNav page="question" />
      <main css={styles.root}>
        <aside>
          <Paper className="popular-tags" elevation={0}>
            <div className="head">Popular Tag</div>
            <div className="tags">
              <span className="tag">
                Python
              </span>
              <span className="tag">
                React
              </span>
              <span className="tag">
                Rust
              </span>
              <span className="tag">
                VueJs
              </span>
            </div>
          </Paper>
        </aside>
        <div className="body">
          <Paper className="board" elevation={0}>
            <header>
              <div className="question-head">
                <div className="title">Permutation in JavaScript?</div>
                <div className="stats">
                  <div className="stat">
                    Ditanyakan pada <span>10 Tahun Lalu</span>
                  </div>
                  <div className="stat">
                    Diubah pada <span>10 Tahun Lalu</span>
                  </div>
                  <div className="stat">
                    Dilihat <span>1001 kali</span>
                  </div>
                </div>
              </div>
              <Button variant="contianed">
                Ask Question
              </Button>
            </header>
            <div className="question-detail">
              <Votes total={120} />
              <div className="detail">
                <p>I&lsquo;m trying to write a function that does the following:</p>
                <ul>
                  <li>takes an array of integers as an argument (e.g. [1,2,3,4])</li>
                  <li>takes an array of integers as an argument (e.g. [1,2,3,4])</li>
                </ul>
                <p>the function below (I found it online) does this by taking a string as an argument, and returning all the permutations of that string</p>
                <p>I could not figure out how to modify it to make it work with an array of integers, (I think this has something to do with how some of the methods work differently on strings than they do on integers, but I&apos;m not sure...{')'}</p>
                <pre>
                  <code>
                    {`let permArr = [];
let usedChars = [];

function permute(input) {
    const chars = input.split("");
    for (let i = 0; i < chars.length; i++) {
        const ch = chars.splice(i, 1);
        usedChars.push(ch);
        if (chars.length === 0) {
            permArr[permArr.length] = usedChars.join("");
        }
        permute(chars.join(""));
        chars.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr
};
                    `}
                    <p>Note: I&apos;m looking to make the function return arrays of integers, <b>not</b> an array of strings.</p>
                    <p>I really need the solution to be in JavaScript. I&apos;ve already figured out how to do this in python</p>
                  </code>
                </pre>
                <div className="detail-tags">
                  <span className="tag">javascript</span>
                  <span className="tag">permutation</span>
                </div>
                <div className="questioner">
                  <div className="questioner-info">
                    Agus Agusta bertanya <span>kemarin</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="answers">
              <header>
                <div className="total-answer">1 Answer</div>
                <div className="sorting">
                  sorted by :{' '}
                  <Sorting />
                </div>
              </header>
              <div className="answer-detail">
                <Votes total={69} />
                <div className="detail">
                  <p>Little late, but like to add a slightly more elegant version here. Can be any array...</p>
                  <pre>
                    <code>
                      {`function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}`}
                    </code>
                  </pre>
                  <p>Adding an ES6 (2015) version. Also does not mutate the original input array. Works in the console in Chrome...</p>
                  <pre>
                    <code>
                      {`const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute(inputArr)

 return result;
}`}
                    </code>
                  </pre>
                  <p>So...</p>
                  <pre>
                    <code>{`permutator(['c','a','t']);`}</code>
                  </pre>
                  <p>Yields...</p>
                  <pre>
                    <code>{`[ [ 'c', 'a', 't' ],
  [ 'c', 't', 'a' ],
  [ 'a', 'c', 't' ],
  [ 'a', 't', 'c' ],
  [ 't', 'c', 'a' ],
  [ 't', 'a', 'c' ] ]`}</code>
                  </pre>
                  <div className="answerer">
                    <div className="answerer-info">
                      Agus Agusta menjawab <span>kemarin</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="editor">
              <div className="your-answer">Your Answer</div>
              <EditorAnswer />
            </div>
          </Paper>
        </div>
      </main>
    </>
  )
}

Question.defaultProps = {};

Question.propTypes = {};

function Sorting(props) {
  const [sort, setSort] = useState(10)

  const handleChange = (e) => {
    setSort(e.target.value);
  }
  return (
    <FormControl className="formcontrol-select" sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={sort}
        onChange={handleChange}
      >
        <MenuItem value={10}>Vote tertinggi</MenuItem>
        <MenuItem value={20}>Jawaban terbaru</MenuItem>
        <MenuItem value={30}>Jawaban terlama</MenuItem>
      </Select>
    </FormControl>
  );
}

Sorting.defaultProps = {
  
};

Sorting.propTypes = {

};


/*

  pages container
    children statefull
*/