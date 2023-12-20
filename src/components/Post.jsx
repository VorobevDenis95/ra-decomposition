import React from 'react';
//функция обертка со стилями для постов
export default function Post({title, children}) {
  return (
    <div>
        <hi>{title}</hi>
      {children}
    </div>
  );
}
