import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../TicketByFilm/ticketByFilm.scss'

export default function TicketByCinema() {
    const cinema = useSelector(state => state.cinema.data.data)
    const filmByCinema = useSelector(state => state.filmByCinema)
    const dispatch = useDispatch()
    const [listTime, setListTime] = useState([])

    const HandleFilm = (code) => {
        dispatch({ type: 'FETCH_FILM_BY_CINEMA', payload: code })
    }
    const HandleTime = (id) => {
        setListTime(filmByCinema?.data.filter(item => item.id === id))
    }
    return (
        <div className='ticketByFilm flex justify-between gap-5 max-[768px]:flex-col'>
            <div className='ticketByFilm__cinema flex flex-col w-1/3 h-[100%] max-[768px]:h-[300px] max-[768px]:w-full max-[768px]:overflow-y-scroll'>
                <h2 className='ticketByFilm__film--title'>Chọn rạp</h2>
                <ul className='ticketByFilm__film--list'>
                    {
                        cinema?.map(item => (
                            <li onClick={() => HandleFilm(item.code)} className='list__block' key={item.id}>
                                <h2 className='list__block--title'>{item.name}</h2>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='ticketByFilm__film flex flex-col w-1/3 h-[100%] max-[768px]:h-[300px] max-[768px]:w-full max-[768px]:overflow-y-scroll'>
                <div className='ticketByFilm__film--title'>
                    <h2>Chọn phim</h2>
                </div>
                <ul className='ticketByFilm__film--list'>
                    {
                        filmByCinema?.data.map(film => (
                            <li onClick={() => HandleTime(film.id)} className='list__block flex ' key={film.id}>
                                <img src={film.imageLandscape} alt="image" />
                                <div className='list__block--content'>
                                    <h2>{film.name}</h2>
                                </div>
                                <div className='list__block--age'>
                                    <span >T{film.age}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='ticketByFilm__time flex flex-col w-1/3 h-[100%]  max-[768px]:h-[300px] max-[768px]:w-full max-[768px]:overflow-y-scroll'>
                <h2 className='ticketByFilm__film--title'>Chọn suất</h2>
                <ul className='ticketByFilm__film--list'>
                    {
                        listTime.map(time => (
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
