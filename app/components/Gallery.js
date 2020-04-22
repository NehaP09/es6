import React, { Component } from "react";

class Gallery extends Component {
  render() {
    let altImage =
      "https://cdn.dribbble.com/users/2194014/screenshots/6044113/dribbble-05.png";
    return (
      <div>
        {this.props.items.map((item, index) => {
          let { title, imageLinks, infoLink } = item.volumeInfo;
          return (
            <a key={index} className="book" href={infoLink} target="_blank">
              <div className="book-img">
                <img
                  src={
                    imageLinks != undefined ? imageLinks.thumbnail : altImage
                  }
                  alt="book image"
                />
              </div>
              <div className="book-text">{title}</div>
            </a>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
