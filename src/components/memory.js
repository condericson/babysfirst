import React, { Component } from 'react';

class Memory extends Component {

  render() {
    const { content, date, image, i } = this.props;
    let side = 'leftMemory';
    if (i % 2 === 0) {
      side = 'rightMemory';
    }
    let imageTag;
    if (image.length > 0) {
      imageTag = <div className="memoryImageDiv"><img src={image} alt="" /></div>;
    }
    return (
      <div className={side}>
        <div className="description">
          {imageTag}
          <p className="date">{date}</p>
        <p className="content">{content}</p>
        </div>

      </div>
    );
  }
}

export default Memory;

// for testing:
// Today was the first time he ever saw a caterpillar. He plopped right down on the bridge over the railroad and just stared at it. Teddy was intrigued as well!
// https://static.pexels.com/photos/39369/baby-teddy-bear-cute-39369.jpeg
// Having fun picking up toys!
// https://static.pexels.com/photos/315265/pexels-photo-315265.jpeg
// https://static.pexels.com/photos/247185/pexels-photo-247185.jpeg
// https://static.pexels.com/photos/47219/baby-child-newborn-arms-47219.jpeg
