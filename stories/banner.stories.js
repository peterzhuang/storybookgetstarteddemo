import React from 'react';
import { storiesOf } from '@storybook/react';
import MajorBanner from '../components/major.banner';
import MinorBanner from '../components/minor.banner';
import img from '../Images/People Outdoors/shutterstock_116403520.jpg'; 
import leftImg from '../Images/Products/boots/shutterstock_66842440.jpg';
import rightImg from '../Images/Products/boots/shutterstock_1121278055.jpg';

storiesOf("MajorBanner",module)
    .add("With Only Title", () => (
        <MajorBanner title="Banner Title" photo={img} />
    ))
    .add("With All Text Options", () => (
        <MajorBanner 
            title="Banner Title" 
            photo={img}
            subtitle="Banner Subtitle"
            body="Banner Body"
        />
    ));


storiesOf("MinorBanner",module)
    .add("No Pictures", () => (
        <MinorBanner 
            title="Banner Title" 
            subtitle="Banner Subtitle"
            body="Banner Body" 
        />
    ))
    .add("With Pictures", () => (
        <MinorBanner 
            title="Banner Title" 
            photo={img}
            subtitle="Banner Subtitle"
            body="Banner Body"
            leftPhoto={leftImg}
            rightPhoto={rightImg}
        />
    ));