import React from 'react';

export default function HeaderSearch({filters}) {
  return (
    <div>
      {
        filters.map(item=><p>{item}</p>)
      }
    </div>
  );
}
