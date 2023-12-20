import React from 'react';
//отображение массива заголовков с ссылками и датой
export default function Header({titles}) {
    const date=new Date()
  return (
    <div>
      {titles.map(item=>
        <a href={item.href}>{item.title}</a>
        )}
        <p>{date}</p>
    </div>
  );
}
