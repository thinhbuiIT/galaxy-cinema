import { memo } from 'react'
import { Modal, Tabs } from 'antd'

import { useDispatch, useSelector } from 'react-redux';

import Login from './Login/Login';
import Register from './Register/Register';

function ModalLogin() {
    const modal = useSelector(state => state.modal.open)
    const dispatch = useDispatch()
    const items = [
        {
            key: 1,
            label: 'Đăng nhập',
            children: <Login/>
        },
        {
            key: 2,
            label: 'Đăng ký',
            children: <Register/>
        }
    ]
    return (
        <>
            <Modal
                open={modal}
                onCancel={() => dispatch({type: 'modal/closeModal'})}
                footer=''
            >
                <Tabs
                    defaultActiveKey="1"
                    centered
                    items={items}
                />
            </Modal>
        </>
    )
}
export default memo(ModalLogin)