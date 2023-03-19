import React, { useContext } from 'react';
import NewsContext from '../../context/NewsContext';

function AddNews() {
const newsctx = useContext(NewsContext);

  return (
    <div className='row' >
        <div className='col-5'>
        <div className="card border-warning mb-3"  >
            <div className='form-group'>
                <label htmlFor='title' >Haber Başlığı</label>
                <input type="text" className='form-control' id="title"/>
            </div>
            <div className='form-group'>
                <label htmlFor='auther' >Haber Yazarı</label>
                <input type="text" className='form-control' id="auther"/>
            </div>
            <div className='form-group'>
                <label htmlFor='url' >Resim Urlsi</label>
                <textarea rows="1" type="text" name='url' className='form-control' id="url"/>
            </div>
            <div className='form-group'>
                <label htmlFor='content' >Haber İçeriği</label>
                <textarea rows="3" type="text" name='content' className='form-control' id="content"/>
            </div>
            <div className='form-group' >
                <button onClick={()=>{
                    var t=document.getElementById("title").value;
                    var a=document.getElementById("auther").value;
                    var u=document.getElementById("url").value;
                    var c=document.getElementById("content").value;
                    
                    newsctx.addNews(t,a,u,c);}}
                 className='btn btn-dark mt-2 mb-2 float-center'>Kaydet</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AddNews;