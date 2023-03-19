import React, { useContext, useState } from 'react';
import NewsContext from '../../context/NewsContext';


function NewsListItem(props) {

    const ctx = useContext(NewsContext);
const [hid, setHid] = useState("autoP");

const [cls, setCls] = useState("btn btn-primary");


    return (
        <div id='kart' >
            
           <div className='row'>
           <div className="card border-warning mb-3" >
                <div className="card-header">
                    <h6 style={{textAlign:"center"}}>{props.title}</h6>
                </div>
                <img style={{margin:"auto",marginTop:"15px"}} id='img'  src={props.url} alt='' />
                <div className="card-body">
                    <p className="card-title">{props.auther}</p>
                    <p className="card-title"></p>
                    <p id={hid} style={{fontSize:"11px ", fontWeight:"bolder",overflow:"hidden"}} className="card-text">
                        {props.content}
                        </p>
                        <button onClick={()=>{setHid(hid == "hidden" ? "autoP" : "hidden");setCls("d-none")}}
                        style={{fontSize: "10px",marginTop:"-38px"}} className={cls}> Devamını oku...</button>
                   
                    <div className='butonGroup'>
                    <button id='btn1' type="button" className="btn btn-primary">Beğendim</button>
                    <button id='btn1' onClick={() => { ctx.deleteNews(props.id); }} type="button" className="btn btn-primary">Alakasız ve Kapat</button>
                    </div>
                </div>
            </div>
            
           </div>
            
        </div>
    )
}

export default NewsListItem;