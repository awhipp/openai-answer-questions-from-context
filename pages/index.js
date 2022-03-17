import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  
  const [result, setResult] = useState();
  const [questionInput, setQuestionInput] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: questionInput }),
    });
    const data = await response.json();
    setResult(data.result);
  }

  return (
    <div>
      <Head>
        <title>Question &amp; Answer</title>
      </Head>

      <main className={styles.main}>
        <h3>Question &amp; Answer</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="question"
            placeholder="Enter a question"
            value={questionInput}
            onChange={(e) => setQuestionInput(e.target.value)}
          />
          <input type="submit" value="Ask Question" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
