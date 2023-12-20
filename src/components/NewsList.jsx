import React from 'react';
import NewItem from './NewItem';
//передаем массив новостей
export default function NewsList({news}) {
  return (
    <div>
      {news.map(item=><NewItem key={item.id} item={item}></NewItem>)}
    </div>
  );
}
