import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [num, setNum] = useState("");
  const [t9List, setT9List] = useState([] as string[]);

  function handleSubmit(e: { preventDefault: () => void } | undefined){
    e?.preventDefault();
    
    // Make a request for a user with a given ID
    axios.get(`api/t9/${num}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setT9List(response.data.t9list as string[])
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="FullStack JS Task - Kiwicom - Jesus Aguas" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-6xl">
          T9 translator
        </h1>
        <p className="text-xl mt-5 mb-3">
          {"Convert a number into a list of corresponding words in the style of T9"}
        </p>
        <p className="text-sm mb-5">
          {"*Numbers 0 and 1 act like a blank space character"}
        </p>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {"Number:  "}
            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={num} onChange={(e) => setNum(e.target.value)} />
          </label>
          <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Submit</button>
        </form>
        <br></br>

        <h2 className="text-4xl underline">T9 List</h2>
        <ul className="list-disc">
          {t9List.map((t9, i)=>(
            <li className="text-base" key={i}>{t9}</li>
          ))}
        </ul>

      </main>

      <footer className={styles.footer}>
        <p>Created by Jesus Aguas</p>
      </footer>
    </div>
  )
}

export default Home
