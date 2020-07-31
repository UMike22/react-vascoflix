import React from 'react';
import { WrapperVasco, Thumb } from './styles';

function ThumbVasco ({src, alt}) {
   return ( <WrapperVasco>
        <Thumb src={src} alt={alt} />
    </WrapperVasco>
   )
}

export default ThumbVasco;