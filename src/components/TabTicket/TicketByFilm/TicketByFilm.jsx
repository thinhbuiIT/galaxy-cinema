import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './ticketByFilm.scss'

export default function TicketByFilm() {
    const film = useSelector(state => state.film.data.data?.movieShowing)
    const cinemaByFilm = useSelector(state => state.cinemaByFilm)

    const dispatch = useDispatch()

    const [listTimes, setListTimes] = useState([])

    const HandleThreate = (id) => {
        dispatch({ type: 'FETCH_CINEMA_BY_FILM', payload: id })
    }
    
    const HandleTimes = (id) => {
        setListTimes(cinemaByFilm.data?.filter(time => time.id === id))
    }

    return (
        <div className='ticketByFilm flex justify-between gap-5 max-[768px]:flex-col'>
            <div className='ticketByFilm__film flex flex-col w-1/3 h-full max-[768px]:h-[300px] max-[768px]:w-full max-[768px]:overflow-y-scroll'>
                <div className='ticketByFilm__film--title '>
                    <h2>Chọn phim</h2>
                </div>
                <ul className='ticketByFilm__film--list'>
                    {
                        film?.map(film => (
                            <li onClick={() => HandleThreate(film.id)} className='list__block flex ' key={film.id}>
                                <img src={film.imageLandscape} alt="image" />
                                <div className='list__block--content'>
                                    <h2>{film.name}</h2>
                                    <p>{film.subName}</p>
                                </div>
                                <div className='list__block--age'>
                                    <span >T{film.age}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='ticketByFilm__cinema flex flex-col w-1/3 h-full max-[768px]:h-[300px] max-[768px]:w-full max-[768px]:overflow-y-scroll'>
                <h2 className='ticketByFilm__film--title'>Chọn rạp</h2>
                <ul className='ticketByFilm__film--list'>
                    {
                        cinemaByFilm.data?.length === 0
                            ?
                            <li className='list__block'>
                                <h2 className='list__block--title'>Vui lòng chọn rạp</h2>
                            </li>
                            :
                            cinemaByFilm.data?.map(threate => (
                                <li onClick={() => HandleTimes(threate.id)} className='list__block' key={threate.id}>
                                    <h2 className='list__block--title'>{threate.name}</h2>
                                </li>
                            ))
                    }
                </ul>
            </div>
            <div className='ticketByFilm__time flex flex-col w-1/3 h-full max-[768px]:h-[300px] max-[768px]:w-full max-[768px]:overflow-y-scroll'>
                <h2 className='ticketByFilm__film--title'>Chọn suất</h2>
                <ul className='ticketByFilm__film--list'>
                    {
                        listTimes.map(time => (
                            time.dates.map((items, index) => (
                                <li className='show__time p-3' key={index}>
                                    <h2>{items.dayOfWeekLabel}, <span>{items.showDate}</span></h2>
                                    <div className="show__time--content mt-3">
                                        {
                                            items.bundles.map((info, index) => (
                                                <div className='flex items-start' key={index}>
                                                    <h2 className='w-1/3 show__time--title'><span className='uppercase'>{info.version}</span> - {info.caption === 'sub' ? 'Phụ đề' : 'Lồng tiếng'}</h2>
                                                    <div className="show__time--list flex flex-wrap w-2/3 gap-3">
                                                        {
                                                            info.sessions.map((items, index) => (
                                                                <p key={index} className='show__time--items w-1/4 text-center p-0'>{items.showTime}</p>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </li>
                            ))
                        ))
                    }
                </ul>
            </div>
        </div >
    )
}
