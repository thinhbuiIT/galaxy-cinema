import { notification } from 'antd';

const createNotification = ({type, message, desc }) => {
    return notification[type]({
        message,
        description: desc
    });
};

export default createNotification