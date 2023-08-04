import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

const [loading, setLoading] = useState(true);
const [data, setData] = useState ([])

const fetchData = async () =>{
    const res = await fetch(url);
    const data =await res.json();
    setLoading (false)
    setData (data)
}

useEffect (()=>{
    fetchData()
}, [url])
  return {loading, data}
}

