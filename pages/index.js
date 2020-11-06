import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import accountBalance from '../utils/balance';
import readContract from '../utils/contract';
import sendEth from '../utils/send';

class Home extends React.Component {
  state = {
    text: "Send 0.1 eth"
  }

  send = () => {
    this.setState({ text: "Sending" });

    sendEth();
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>HPB Defi</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to HPB defi
          </h1>

          <button
            className={styles.button}
            onClick={accountBalance}
          >Get balance</button>

          <button
            className={styles.button}
            onClick={readContract}
          >Read contract</button>

          <button
            className={styles.button}
            onClick={this.send}
          >{this.state.text}</button>
        </main>

        <footer className={styles.footer}>
            Built by Lu
        </footer>
      </div>
    )
  }
}

export default Home;