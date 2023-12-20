import React from 'react';
import Advertising from './Advertising';
import Currency from './Currency';
import Header from './Header';
import NewsList from './NewsList';


export default function News() {
    const headerTitles=[{
        title:'',
        href:''
    },
    {
        title:'',
        href:''
    },
]
const currencyArr=[{
    name:'',
    value:'',
    dif:'',
}]
  return (
    <div>
      <Header titles={headerTitles}/>
      <NewsList news={[]}/>
      <Advertising title='' text='' img=''/>
      <Currency arr={currencyArr}/>
    </div>
  );
}
