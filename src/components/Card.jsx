import React from 'react';
import 'tachyons';



const Card = (props) => { 
  const { email, username, id} = props
  return (
    <div className='bg-light-blue dib tc bw2 shadow-5  br3 pa3 ma2 grow'>
      <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt='meows' />
      <div>
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card 