import React, { memo } from 'react'
import { Tabs } from 'antd';
import TicketByCinema from './TicketByCinema/TicketByCinema';
import TicketByFilm from './TicketByFilm/TicketByFilm';

const TabTicket = () => {
    const items = [
        {
            key: '1',
            label: 'Theo Phim',
            children: <TicketByFilm />,
        },
        {
            key: '2',
            label: 'Theo Rạp',
            children: <TicketByCinema />,
        }
    ];

    return (
        <div className='ticket flex justify-center'>
            <div className='container'>
                <Tabs defaultActiveKey="1" items={items} />
            </div>
        </div>
    )
}
export default memo(TabTicket)
