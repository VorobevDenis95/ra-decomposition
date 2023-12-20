import React from 'react';
// из массива достаем логотип, заголовок и ссылку на статью
export default function NewItem({item}) {
    const {logo, title, href}=item
  return (
    <div>
      <image src = {logo}></image>
      <a href={href}>{title}</a>
    </div>
  );
}
