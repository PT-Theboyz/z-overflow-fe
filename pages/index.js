import TopNav from "../components/elements/TopNav";
import { Paper } from "@mui/material";
import styles from './styles'
import Link from 'next/link'

export default function Home() {
  const arr = [1,2,3,4];
  return (
    <>
      <TopNav />
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
          <div className="questions">
            {arr.map(val => (
              <Paper className="question" key={val} elevation={0}>
                <section className="stats">
                  <div className="votes">0 Votes</div>
                  <div className="answers">0 Answer</div>
                </section>
                <section className="description">
                  <Link href={`/question`}>
                    <div className="title">
                      test pertanyaan 1
                    </div>
                  </Link>
                  <div className="question-tags">
                    <span>Java</span>
                    <span>JavaScript</span>
                    <span>Python</span>
                  </div>
                  <div className="user">
                    <span className="name">Dayat Hidayat</span>{" "}bertanya Kemarin
                  </div>
                </section>
              </Paper>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
