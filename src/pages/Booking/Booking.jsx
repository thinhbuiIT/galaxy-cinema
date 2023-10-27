import { memo, useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { useLocation } from 'react-router-dom'
import { fetchBookingDetail } from '../../services/bookingApi'

function Booking() {
    const location = useLocation()
    const [list, setList] = useState()
    const [seat, setSeat] = useState([])
    const [model, setModel] = useState({
        row: 0,
        col: 0
    })

    useEffect(() => {
        fetchBookingDetail()
            .then(response => {
                let [standardSeat, coupleSeat] = response.data.seatPlan.seatLayoutData.areas
                setSeat([...coupleSeat.rows, ...standardSeat.rows])
                setList(
                    [...coupleSeat.rows, ...standardSeat.rows].map(ip => ip.seats.map(st => {

                        if (st.seatsInGroup !== null) {
                            st.seatsInGroup.map(dt => {
                                // console.log('OUTPUT : ',{ row: dt.position.rowIndex, col: dt.position.columnIndex });
                                console.log('dt : ', dt);
                                // return { row: st.position.rowIndex, col: st.position.columnIndex }
                            })
                        }
                        return ({ row: st.position.rowIndex, col: st.position.columnIndex })
                    })))

                setModel({
                    row: standardSeat.rowCount + coupleSeat.rowCount,
                    col: standardSeat.columnCount
                })
            })
    }, [])
    // console.log('physicalName : ', physicalName);
    console.log('seat : ', seat);
    return (
        <div className='booking flex justify-center'>
            <ul className='flex flex-col gap-1' >
                {
                    Array(model.row)?.fill(0).map((row, indexRow) =>
                        <li className='flex justify-between gap-5' key={indexRow}>
                            <p className='block'>{seat[indexRow].physicalName}</p>
                            <div className='flex gap-[5px]'>
                                {
                                    Array(model.col).fill(0).map((col, indexCol) =>
                                        <div key={indexCol}>
                                            <button className={` ${list[indexRow].find(lt => lt.col === indexCol) ? 'border border-gray-400 rounded-[5px] ' : 'invisible'}`} key={indexRow}>

                                                <span className={`p-2 `}>
                                                    {indexCol + 1}
                                                </span>

                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                            <p className='block'>{seat[indexRow].physicalName}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
export default memo(Booking)