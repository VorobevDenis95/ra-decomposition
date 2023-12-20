import React from 'react';
//Отображает логотип при поиске. не уверена, что этот компонент нужен. Может стоит просто svg в родительский компонент
export default function Logo({svg}) {
  return (
    <div>
      {svg}
    </div>
  );
}
