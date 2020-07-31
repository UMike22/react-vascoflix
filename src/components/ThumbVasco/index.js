import React from 'react';
import { WrapperVasco, Thumb, Avatar } from './styles';

function ThumbVasco ({src, alt, avatar, nameChannel}) {
   return ( <WrapperVasco>
        <Thumb src={src} alt={alt} />
        <Avatar src={avatar} alt={nameChannel} />
    </WrapperVasco>
   )
}

export default ThumbVasco;