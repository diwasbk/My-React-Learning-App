import React from 'react';
import './Custom.css'

function Images() {
  return (
    <div className='img-container'>
      <div className='src_img'>
        <img src="https://media.licdn.com/dms/image/v2/D4E12AQEh3Crxtzr2Sw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693199649217?e=2147483647&v=beta&t=TVKMsdVKtw4rHCxghD68bLHwfPTNyJzxWsNHnBY6M9U" alt="Source from URL"/>
      </div>
      <div className='local_img'>
        <img src="/tools_technology.png" alt="Tools and Technology" />
      </div>
    </div>
  );
}

export default Images;
