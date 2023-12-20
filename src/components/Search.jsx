import React from 'react';
import Button from './Button';
import HeaderSearch from './HeaderSearch';
import Input from './Input';
import Logo from './Logo';
import Promt from './Promt';
// блок с поиском/ здесь предположительно хранятся состояния и происходят запросы на бэк
export default function Search() {
    const arr=[]
    const func=()=>{

    }
  return (
    <div>
      <HeaderSearch filters={arr} />
        <Logo svg={'ссылка на свг'}/>
        <form>
         <Input placeholder='' func={'сюда нужно передавать функцию для захвата состояния '}/>
         <Button  onClick ={func} label={''}/>

        </form>
         <Promt text=''/>
    </div>
  );
}
