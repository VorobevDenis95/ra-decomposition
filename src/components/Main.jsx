import React from 'react';
import Banner from './Banner';
import Item from './Item';
import Post from './Post';

// отображение постов 
export default function Main() {
    const posts=[//массив постов с разными ключами
        {},{},{}
    ]
  return (
    <div>
        <Banner img={'адрес для подгрузки картинки'}/>
<div>
    {posts.map(item=><Post title={item.title}><Item item={item}></Item></Post>)}
   {/* <Post title={'заголовок поста'}>
      <Weather type={'тип картинки погоды'} temperature={"температура"} promt={"доп текст"}/>
    </Post> 
    <Post>
      <Visited items={items}/>
    </Post> 
    <Post>
      <Map/>
    </Post> 
    <Post>
      <TVProgramm/>
    </Post> 
    <Post>
      <Ether/>
    </Post>  */}

</div>

    </div>
  );
}
