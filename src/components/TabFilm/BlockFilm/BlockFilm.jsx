import { memo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar, faTicket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import '../tabfilm.scss';
import ModalFilm from '../../ModalFilm/ModalFilm';

function BlockFilm({ film }) {
    const nav = useNavigate()
    const [open, setOpen] = useState(false)

    return (
        <div className='showing__film p-3 w-1/4 cursor-pointer max-[768px]:w-1/2' key={film.id}>
            <div className="showing__film--movie">
                <img className='showing__film--image' src={film.imagePortrait} alt="image" />
                <div className="showing__film--hover flex flex-col gap-3 justify-center items-center">
                    <button
                        onClick={() => nav(`/detail/${film.slug}`, { replace: true })}
                        className="rounded-[8px] px-5 py-2 uppercase text-white bg-[#F26B38] border-[#F26B38]"
                    >
                        <FontAwesomeIcon className='mr-[5px]' icon={faTicket} style={{color: '#fff'}}/>
                        Mua vé</button>
                    <button
                        className="rounded-[8px] px-5 py-2 uppercase text-white border-white border hover:bg-[#F26B38] hover:border-[#F26B38]"
                        onClick={() => setOpen(true)}
                    >
                        <FontAwesomeIcon className='mr-[5px]' icon={faPlay} style={{color: '#fff'}}/>
                        Trailer</button>
                </div>
                <div className='showing__film--point absolute right-4 bottom-10 z-10'>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faStar} style={{ color: "#ddfa00", }} />
                        <p className="text-white font-bold">{(film.point).toFixed(1)}</p>
                    </div>
                    <p className="absolute text-white right-0 bg-[#F58020] rounded-[5px] p-1">{('T' + film.age).toUpperCase()}</p>
                </div>
            </div>
            <div className="showing__film--title">
                <h2 className='uppercase'>{film.name}</h2>
                <p className='showing__film--paragraph uppercase font-medium'>{film.subName}</p>
            </div>
            <ModalFilm open={open} setOpen={setOpen} trailer={film.trailer} />
        </div>
    )
}
export default memo(BlockFilm)