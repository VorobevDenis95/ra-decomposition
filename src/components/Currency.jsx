import React from 'react';
// строка с курсом валют
export default function Currency ({arr}) {
  return (
    <div>
      {arr.map((item)=>
     {const {name, value, dif}=item
     return (<>
     <p>{name}</p>
     <p>{value}</p>
     <p>{dif}</p>
        </>)}
        )

}
    </div>
  );
}
