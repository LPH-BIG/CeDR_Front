import React, { useState, FC } from 'react';
import { Table, Tag, Space, Pagination, Popconfirm, Button } from 'antd';
import { connect, Dispatch, Link, Loading, UserState } from 'umi';
import UserModal from '@/pages/users/components/UserModal';
import { SingleUserType } from './data';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { getRemoteList } from './service';
import styles from './index.less';
interface UserPageProps {
  users: UserState;
  dispatch: Dispatch;
  userListLoading: boolean;
}
type ProTablesType = {
  id: number;
  name: string;
  create_time: string;
};
const UsersListPage: FC<UserPageProps> = ({
  users,
  dispatch,
  userListLoading,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [record, setRecord] = useState<SingleUserType | undefined>(undefined);

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const editHandler = (record: SingleUserType) => {
    setIsModalVisible(true);
    setRecord(record);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values: any) => {
    let id = 0;
    if (record) {
      id = record.id;
    }
    if (id) {
      console.log('edit');
      dispatch({
        type: 'users/edit',
        payload: { id, values },
      });
    } else {
      console.log('add');
      console.log(values);
      dispatch({
        type: 'users/add',
        payload: { values },
      });
    }

    setIsModalVisible(false);
  };

  const confirm = (id: number) => {
    dispatch({
      type: 'users/delete',
      payload: { id },
    });
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'CreateTime',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: SingleUserType) => (
        <span>
          <a
            onClick={() => {
              editHandler(record);
            }}
          >
            Edit
          </a>
          &nbsp;&nbsp;
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => {
              confirm(record.id);
            }}
            okText="Yes"
            cancelText="No"
          >
            <a>Delete</a>
          </Popconfirm>
          ,
        </span>
      ),
    },
  ];

  const addHandler = () => {
    setIsModalVisible(true);
    setRecord(undefined);
  };
  const requestHandler = async ({ pageSize, current }) => {
    const users = await getRemoteList({
      page: current,
      per_page: pageSize,
    });
    const data = {
      data: users.data,
      success: true,
      total: users.meta.total,
    };
    console.log(data);
    return data;
  };
  const onChange = (pageNumber, pageSize) => {
    console.log('Page: ', pageNumber, pageSize);
  };
  const paginationHandler = (page: number, pageSize?: number) => {
    dispatch({
      type: 'users/getRemote',
      payload: {
        page,
        per_page: pageSize ? pageSize : users.meta.per_page,
      },
    });
  };
  const sizeChangeHandler = (current: number, size: number) => {
    dispatch({
      type: 'users/getRemote',
      payload: {
        page: current,
        per_page: size,
      },
    });
  };
  return (
    <div>
      <Button type="primary" onClick={addHandler}>
        Add
      </Button>
      <Button>
        <Link to="/home">return to home</Link>
      </Button>
      <ProTable
        columns={columns}
        dataSource={users.data}
        rowKey="id"
        loading={userListLoading}
        pagination={false}
        // request={requestHandler}
        // search={false}
      />
      <Pagination
        className={styles.pagenation}
        showQuickJumper
        defaultCurrent={1}
        total={users.meta.total}
        pageSize={users.meta.per_page}
        showSizeChanger
        showTotal={(total) => `Total ${total} items`}
        pageSizeOptions={[5, 10, 20, 30]}
        onChange={paginationHandler}
        onShowSizeChange={sizeChangeHandler}
      />
      <UserModal
        visible={isModalVisible}
        onOk={handleOk}
        record={record}
        onFinish={onFinish}
        onCancel={handleCancel}
      ></UserModal>
    </div>
  );
};

const mapStateToProps = ({
  users,
  loading,
}: {
  users: UserState;
  loading: Loading;
}) => {
  return {
    users,
    userListLoading: loading.models.users,
  };
};

export default connect(mapStateToProps)(UsersListPage);
