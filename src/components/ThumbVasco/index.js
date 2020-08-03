import React from 'react';
import { WrapperVasco, Thumb, Avatar, Channel } from './styles';

function ThumbVasco ({src, alt, avatar, nameChannel}) {
   return ( <WrapperVasco>
        <Thumb src={src} alt={alt} />
        <Avatar src={avatar} alt={nameChannel} />
        <Channel>{nameChannel}</Channel>
    </WrapperVasco>
   )
}

export default ThumbVasco;