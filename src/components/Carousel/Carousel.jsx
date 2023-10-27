import { memo, useRef } from 'react';

import { Carousel } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import TicketQuickly from '../TicketQuickly/TicketQuickly';

import './carousel.scss'

const Caurosel = ({ items, ticket }) => {
    const carouselRef = useRef(0);
    console.log('items : ',items);
    const HandleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    }

    const HandlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    }

    return (
        <div className='slider flex flex-col justify-center relative'>
            <div className='slider__content relative'>
                <button className='slider__button--prev absolute z-10 h-full px-2 max-[768px]:hidden' onClick={HandlePrev}> <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '40px', color: '#c5cad3' }} /> </button>
                <button className='slider__button--next absolute z-10 h-full px-2 right-0 max-[768px]:hidden' onClick={HandleNext}> <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '40px', color: '#c5cad3' }} /> </button>

                <Carousel className="custom-3d-carousel" ref={carouselRef} dotPosition='top' >
                    {
                        items?.map((items, index) => (
                            items.imageUrls ? <div className='custom-3d-carousel-item text-center w-full px-[50px] max-[768px]:px-0' key={index} >
                            <img src={items.imageUrls} />
                        </div> : <div className='custom-3d-carousel-item text-center w-full px-[50px] max-[768px]:px-0' key={index} >
                            <img className='w-[100%] h-[550px]' src={items} />
                        </div>
                        ))
                    }
                </Carousel>

            </div>
            {ticket && <TicketQuickly />}
        </div>
    );
};
export default memo(Caurosel);