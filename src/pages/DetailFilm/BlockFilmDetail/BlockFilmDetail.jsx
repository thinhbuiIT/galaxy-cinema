import { memo } from 'react'
import { faCalendar, faClock, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import moment from "moment"

function BlockFilmDetail({ detail }) {
    return (
        <div className="flex justify-center">
            <div className="container ">
                <div className="flex">
                    <div className="bg-white h-[400px] w-[auto] p-1 rounded-[8px]">
                        <img className="w-full h-full " src={detail.imagePortrait} alt="imagePortrait" />
                    </div>
                    <div className="flex flex-col ml-[20px] gap-5">
                        <h2 className="text-[20px] font-bold">{detail.subName}</h2>

                        <div className="flex gap-5">
                            <div className="flex">
                                <FontAwesomeIcon icon={faClock} style={{ color: "#f5a051", }} />
                                <p>{detail.duration + 'Phút'}</p>
                            </div>

                            <div className="flex">
                                <FontAwesomeIcon icon={faCalendar} style={{ color: "#f5a051", }} />
                                <p>{moment(detail.enddate).format('DD/MM/YYYY')}</p>
                            </div>
                        </div>

                        <div className="flex">
                            <FontAwesomeIcon icon={faStar} style={{ color: "#f5a051", }} />
                            <p>{detail.point}</p>
                        </div>
                    </div>
                </div>
                <p dangerouslySetInnerHTML={{ __html: detail.description }}></p>
            </div>

        </div>
    )
}
export default memo(BlockFilmDetail)