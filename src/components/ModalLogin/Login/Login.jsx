import { memo } from 'react'
import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();

  const HandleLogin = (value) => {
    dispatch({ type: 'LOGIN', payload: value })
    dispatch({ type: 'modal/closeModal' })
  }

  return (
    <div className='login flex flex-col gap-4'>
      <Form
        name="Login"
        initialValues={{ remember: true }}
        onFinish={HandleLogin}
      >
        <Form.Item
          label="Email"
          name="Email"
          rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
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
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default memo(Login)