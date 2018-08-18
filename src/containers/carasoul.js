import React, { Component } from 'react';

import { Carousel } from 'react-responsive-carousel';
 
export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYiYAa70SUyqTGiAY6ZcwOY0oGB7sj7p636qfMb_8mD2JjNlJ6" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYiYAa70SUyqTGiAY6ZcwOY0oGB7sj7p636qfMb_8mD2JjNlJ6" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYiYAa70SUyqTGiAY6ZcwOY0oGB7sj7p636qfMb_8mD2JjNlJ6" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}