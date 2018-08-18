import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://pbs.twimg.com/profile_images/712502930675347457/L5RMikN9_400x400.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://qph.fs.quoracdn.net/main-thumb-63333671-200-zzqbybjkmhzcfxbbgeyetkzcpizupehu.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://qph.fs.quoracdn.net/main-thumb-63333671-200-zzqbybjkmhzcfxbbgeyetkzcpizupehu.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}