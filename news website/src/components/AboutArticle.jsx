import React from 'react'
import { useLocation } from 'react-router-dom'


function AboutArticle() {
  const { state } = useLocation()
  const article = state?.article

  return (
    <div className="about-article">
      <h2>{article?.title}</h2>
      <p className="source-name">{article?.source.name}</p>
      <img src={article?.urlToImage} alt="Article" />
      <p className="description">{article?.description}</p>
      <a href={article?.url} target="_blank" rel="noreferrer">Read full article</a>
    </div>
  )
}

export default AboutArticle
