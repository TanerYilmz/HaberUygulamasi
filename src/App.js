import axios from 'axios';
import React, { useState, useContext } from 'react'
import AddNews from './components/pages/AddNews';
import NewsList from './components/pages/NewsList';
import ApplicationContext from './context/ApplicationContext';
import NewsContext from './context/NewsContext';
import NewsListItem from './components/pages/NewsListItem';





function App() {
  var appContext = useContext(ApplicationContext);
  var newsContext = useContext(NewsContext);
  const [newsData, setNewsData] = useState([]);

  const [activePage, setActivePage] = useState(<NewsList />);
  appContext.setPage = setActivePage;

  newsContext.dataList = newsData;
  newsContext.getAll=()=>{
    axios
    .get("http://localhost:3000/news")
    .then(function(response){
      setNewsData(response.data);
      setActivePage(<NewsList />);
    })
  };

  newsContext.deleteNews=(id)=>{
    axios
    .delete("http://localhost:3000/news/"+id)

    .then(function(response){
      newsContext.getAll();
      setActivePage(<NewsList />);

    })
  }
  newsContext.addNews=(title,auther,url,content)=>{
    axios
    .post("http://localhost:3000/news",{
      baslik:title,
      yazar:auther,
      yolu:url,
      icerik:content
    })
    .then(function(response){
      newsContext.getAll();
      setActivePage(<NewsList />);


    })
  }

  
  return (
    

      <ApplicationContext.Provider value={appContext}>
        
        <div>
          <div className='container'>
            <div className='row'>
              <div style={{display:"flex", justifyContent:"center"}}>
                <h1 style={{color:"white"}}>HABERLER</h1>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'center' }} className=''>
                  <button onClick={()=>{appContext.setPage(<AddNews />)}} 
                  style={{ marginRight: '25px' }} className='btn btn-warning w-25 mb-2 mt-2 '>Haber Ekle</button>
                  <button  onClick={()=>{appContext.setPage(<NewsList />)}}
                  style={{ marginRight: '25px' }} className='btn btn-warning w-25 mb-2 mt-2 '>Haber Listesi</button>
                </div>
              </div>
              <div className=''>
                <NewsContext.Provider value={newsContext}>
                  {activePage}
                </NewsContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </ApplicationContext.Provider>

    
  );
}

export default App;