import React from 'react';
// собирает данные из формы, возвращает родителю
export default function Input({func, placeholeder}) {
  return (
    <div>
        <input placeholeder={placeholeder} onChange={func}></input>

    </div>
  );
}
