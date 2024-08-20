import React from 'react';
import Video from 'next-video';
import banner from '../../../../../public/vediobanner.mp4'

const Slider: React.FC = () => {
    return (
        <div>
             <Video  autoPlay loop>
                <source src={banner} type='video/mp4'/>
            </Video>
        </div>
    );
}

export default Slider;
