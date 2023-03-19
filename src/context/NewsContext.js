import React from 'react';

var dataList=[];
 

var contextData={

    addNews:()=>{},
    getAll:()=>{},
       
    updateNews:()=>{},
    deleteNews:()=>{},
    }

var NewsContext=React.createContext(contextData);

export default NewsContext;