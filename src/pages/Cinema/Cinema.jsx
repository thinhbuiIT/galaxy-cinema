import React, { memo, useEffect, useState } from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Cinema() {
    const cinema = useSelector(state => state.cinema.data?.data)
    const { slug } = useParams()
    const [detailCine, setDetailCine] = useState({})

    useEffect(() => {
        setDetailCine(cinema.find(cine => cine.slug === slug))
    }, [])
    console.log('OUTPUT : ',detailCine);
    return (
        <div className=''>
            <Carousel items={detailCine.imageUrls}/>
        </div>
    )
}
export default memo(Cinema) 