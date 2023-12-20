import React from 'react';
// универсальный компонент кнопки
export default function Button({onClick, label}) {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  );
}
