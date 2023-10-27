import { ConfigProvider, Modal } from 'antd';
import { memo } from 'react';

function ModalFilm({ open, setOpen, trailer }) {
    return (
        <ConfigProvider theme={{
            components: {
                Modal: {
                    contentBg: '#000'
                }
            }
        }}>
            <Modal
                style={{ borderRadius: '20px' }}
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={'80%'}
                height={'80%'}
                footer=''
            >
                <iframe width="100%" height="500px" src={trailer?.replace('watch?v=', 'embed/')} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Modal>
        </ConfigProvider>
    )
}
export default memo(ModalFilm)