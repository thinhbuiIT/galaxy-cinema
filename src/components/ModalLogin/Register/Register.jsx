import { memo } from 'react'
import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux';

function Register() {
    const dispatch = useDispatch()

    const HandleRegister = (value) => {
        dispatch({ type: 'REGISTER', payload : value})
        dispatch({type:'modal/closeModal'})
    }

    return (
        <div className='register flex flex-col gap-4'>
            <Form
                name="Register"
                initialValues={{ remember: true }}
                onFinish={HandleRegister}
            >
                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="FullName"
                    name="Name"
                    rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="Password"
                    rules={[{ required: true, message: 'Vui lòng nhập password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button className='bg-[#034EA2] w-full text-white' htmlType="submit">
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default memo(Register)