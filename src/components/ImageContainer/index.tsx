import React from 'react';

import { ImageWavesContainer } from './style';

interface ImageContainerProps {
    image : any,
    legend : string
}

const ImageContainer : React.FC<ImageContainerProps> = (props) => {
    return (
        <ImageWavesContainer>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#001" fill-opacity="1" d="M0,288L180,160L360,288L540,192L720,192L900,32L1080,128L1260,32L1440,64L1440,0L1260,0L1080,0L900,0L720,0L540,0L360,0L180,0L0,0Z"></path>
            </svg>
            <div>
                <img src={props.image} alt="java"/>
            </div>
            <span>{props.legend}</span>
        </ImageWavesContainer>
    );
}

export default ImageContainer;