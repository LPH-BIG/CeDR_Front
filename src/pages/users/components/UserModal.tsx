import React, { useEffect, FC } from 'react';
import { Modal, Button, Form, Input, Checkbox, message } from 'antd';
import { SingleUserType } from '@/pages/users/data';

interface UserModalProps {
  visible: boolean;
  onOk: () => void;
  record: SingleUserType | undefined;
  onFinish: (values: any) => void;
  onCancel: () => void;
}

const UserModal: FC<UserModalProps> = (props) => {
  const [form] = Form.useForm();

  const { visible, onCancel, onFinish, record } = props;
  useEffect(() => {
    if (record === undefined) {
      form.resetFields();
    } else {
      form.setFieldsValue(record);
    }
  }, [visible]);

  const onSubmit = () => {
    form.submit();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    // message.error(errorInfo)
  };
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={onSubmit}
        // onOk={onCancel}
        onCancel={onCancel}
        forceRender
      >
        <Form
          form={form}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Create Time" name="create_time">
            <Input />
          </Form.Item>
          <Form.Item label="Status" name="status">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserModal;
