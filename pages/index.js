import Head from 'next/head'
import { useQuote } from '../hooks/useQuote'
import useFetch from '../hooks/useFetch'
import { useState, useEffect } from 'react'

export default function Home() {

  const { data, loading, error } = useQuote();
  // useEffect(() => {
  //   console.log(data.data)
  // })
  const animes = data;
  console.log(animes)
  // console.log(data)
  return (
    <div className="">
      {/* <h1>{data}</h1> */}
      <form>
        <label> Choose an anime: </label>
        <select>
          {animes.map(anime => (

            <option> {anime} </option>

          ))}
        </select>
        <input type="submit" className="px-4 py-2 rounded bg-blue-400 hover:bg-blue-100" />
      </form>
    </div>
  )
}
