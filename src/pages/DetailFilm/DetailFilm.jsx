import { memo, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { fetchSearchFilmBySlug } from "../../services/movieApi"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

import ModalFilm from "../../components/ModalFilm/ModalFilm"
import BlockFilmDetail from "./BlockFilmDetail/BlockFilmDetail"

function DetailFilm() {
    const { slug } = useParams()
    const [detail, setDetail] = useState({})
    const [open, setOpen] = useState(false)

    useEffect(() => {
        fetchSearchFilmBySlug(slug)
            .then(dt => setDetail(dt.data))
    }, [])

    return (
        <div className="detail_film h-full w-full">

            <div className="relative h-[500px]">
                <div className="bg-black absolute h-full w-full"></div>
                <div className="absolute left-[25%] z-10">
                    <img className="" src={detail.imageLandscape} alt="imageLandscape" />
                </div>
                <div className="absolute flex items-center justify-center w-full h-full bg-rgba-white-500 z-40 ">
                    <button
                        className="text-black p-3 bg-white h-[70px] w-[70px] flex items-center justify-center rounded-[50%]"
                        onClick={() => setOpen(pre => !pre)}
                    ><FontAwesomeIcon icon={faPlay} size="2xl" /></button>
                </div>
            </div>
            <BlockFilmDetail detail={detail}/>
            <ModalFilm open={open} setOpen={setOpen} trailer={detail.trailer} />
        </div>
    )
}
export default memo(DetailFilm)