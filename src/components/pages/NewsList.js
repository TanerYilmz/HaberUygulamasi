import React, { useContext, useEffect } from 'react'
import NewsListItem from './NewsListItem';
import NewsContext from '../../context/NewsContext';

function NewsList() {
    var newsContext=useContext(NewsContext);
    useEffect(()=>{
        newsContext.getAll();
    },[newsContext]);
    return (
        <div style={{display:"flex", justifyContent:"space-between",flexWrap:"wrap"}}>
          {
            newsContext.dataList 
            ?
           newsContext.dataList.map((item,i)=>{
            return(
                <NewsListItem 
                key={i}
                id={item.id}
                title={item.baslik}
                auther={item.yazar}
                url={item.yolu}
                content={item.icerik}
            />
                
                
            )
           })
           :
           <></>
          }
           
            
           </div>
    )
}

export default NewsList;