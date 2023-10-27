import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import TabFilm from '../../components/TabFilm/TabFilm'
import Blog from '../../components/Blog/Blog'
import { sliderItems } from '../../Constant/sliderItems';

export default function Home() {
    return (
        <>
            <Carousel items={sliderItems} ticket/>
            <TabFilm film={8} />
            <Blog />
        </>
    )
}
