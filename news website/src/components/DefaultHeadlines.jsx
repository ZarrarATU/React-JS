import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



function DefaultHeadlines({ headlines}) {

  let [visible, setVisible] = useState(10)

  const navigate = useNavigate()
  


   const fallbackImage = '/no-image.png'

   function handleHeadline(headline){
      navigate('/about-article',{state: {article: headline} })
   }

  useEffect(() => {
    console.log(headlines);
  }, [headlines]);

  return (
    <div className="main-default">
      {headlines.length > 0 ? (
        headlines.slice(0, visible).map((headline, index) => (
          <div className='headline' onClick={()=>handleHeadline(headline)} key={index}>
            <img src={headline.urlToImage || fallbackImage} onError={(e) => (e.target.src = fallbackImage)}   loading="lazy"  />
            <p className='headline-title'>{headline.title}</p>
          </div>
        ))
      ) : (
        <p>Loading news...</p>
      )}
    </div>

  );
}

export default DefaultHeadlines;
