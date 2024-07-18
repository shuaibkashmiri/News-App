import React, { useEffect, useState } from 'react'
import Newscomponent from './sharedcompnents/Newscomponent';
import "../Styles/style.css"


const Home = () => {
    const [news, setNews] = useState([]);
    const url="https://newsapi.org/v2/top-headlines?country=us&apiKey=40dd280d53a149f48c7c4f88adaf28ec";

    const getNews=async()=>{
        const newsdata=await fetch(url,{method:"GET"})
        const newsDataArr=await newsdata.json();
        console.log(newsDataArr.articles);
        setNews(newsDataArr.articles)
    }

   


    useEffect(()=>{
        getNews();
    } ,[])
  return (
    <div className='home'>
        <h1>Top Headlines</h1>
        <div className='allnews'>
            {news.map((e)=><Newscomponent title={e.title} desc={e.description} url={e.url}/>)}

        </div>
    </div>
  )
}

export default Home