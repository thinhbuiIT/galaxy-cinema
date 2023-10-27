import { memo } from "react"
import { useSelector } from "react-redux"
import BlockFilm from "../BlockFilm/BlockFilm"

import '../tabfilm.scss'

function FilmCommingSoon(props) {
    const { countRender } = props
    const film = useSelector(state => state.film.data.data?.movieCommingSoon)

    console.log('FilmCommingSoon : ',film);
    return (
        <div className='showing flex justify-between flex-wrap w-full'>
            {
                !countRender ?
                    film?.map(film => (
                        <BlockFilm key={film.id} film={film}/>
                    )) :
                    film?.slice(0, countRender).map(film => (
                        <BlockFilm key={film.id} film={film}/>
                    ))
            }
        </div>
    )
}
export default memo(FilmCommingSoon)