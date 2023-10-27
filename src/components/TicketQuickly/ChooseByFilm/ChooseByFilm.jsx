import { memo, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form';

import createNotification from '../../../utils/notifications'

function ChooseByFilm() {
    const film = useSelector(state => state.film.data.data?.movieShowing)
    const cinemaByFilm = useSelector(state => state.cinemaByFilm.data)
    const userInfo = useSelector(state => state.user)

    const [day, setDay] = useState([])
    const [show, setShow] = useState([])

    const dispatch = useDispatch()
    const nav = useNavigate()

    const { register, handleSubmit } = useForm();

    const HandleFetchCinemas = (e) => {
        dispatch({ type: 'FETCH_CINEMA_BY_FILM', payload: e.target.value })
    }
    const HandleGetDay = (e) => {
        setDay(cinemaByFilm.filter(film => (film.id === e.target.value)).map(items => items.dates))
    }
    const HandleGetTime = (e) => {
        const a = day[0].filter(dates => (dates.dayOfWeekLabel + ', ' + dates.showDate) === e.target.value)
        setShow(a[0].bundles.map(ss => ss.sessions.map(te => te.showTime)))
    }
    const HandleBooking = (data) => {
        const { FilmName, CinemaName, Dates, Times } = data
        if (!userInfo.user.Email) {
            createNotification({ type: 'error', message: 'Vui lòng đăng nhập để mua vé' })
            dispatch({ type: 'modal/openModal' })
        } else {
            nav('/booking', {
                state: {
                    FilmName,
                    CinemaName,
                    Dates,
                    Times
                }
            })
        }
    }

    return (
        <div className="flex justify-center w-full ">
            <div className="container flex justify-center">
                <div className="box-buy-ticket flex items-center h-[56px] bg-white absolute bottom-[-5%] 
                max-[768px]:hidden shadow-xl ">
                    <form onSubmit={handleSubmit(HandleBooking)} className="flex flex-wrap h-full">
                        <select
                            className="h-full outline-none overflow-y-scroll w-[200px]"
                            {...register("FilmName")}
                            onChange={HandleFetchCinemas}
                            required
                        >
                            <option hidden value="" key="">
                                Chọn phim
                            </option>
                            {
                                film?.map(items => <option key={items.id} className="m-[20px]" value={items.id}>{items.name}</option>)
                            }
                        </select>
                        <select
                            className="h-full outline-none overflow-y-scroll w-[200px]"
                            {...register("CinemaName")}
                            onChange={HandleGetDay}
                            required
                        >
                            <option hidden value="" key="">Chọn Rạp</option>
                            {
                                cinemaByFilm?.map(items => <option key={items.id} className="m-[20px]" value={items.id}>{items.name}</option>)
                            }
                        </select>
                        <select
                            className="h-full outline-none overflow-y-scroll w-[200px]"
                            {...register("Dates")}
                            onChange={HandleGetTime}
                            required
                        >
                            <option hidden value="" key="">Chọn Ngày</option>
                            {
                                day[0]?.map((items, index) => <option key={index} className="m-[20px]" value={items.id}>{items.dayOfWeekLabel + ', ' + items.showDate}</option>)
                            }
                        </select>
                        <select
                            className="h-full outline-none overflow-y-scroll w-[200px]"
                            {...register("Times")}
                            required
                        >
                            <option hidden value="" key="">Chọn Suất</option>
                            {
                                show[0]?.map((item, index) => <option value={item} key={index}>{item}</option>)
                            }
                        </select>
                        <button
                            type='submit'
                            className="box-buy-ticket__button uppercase bg-[#F26B38] p-4 text-white"
                        >Mua Vé Nhanh</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default memo(ChooseByFilm)