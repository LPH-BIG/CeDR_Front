import { Reducer, Effect, Subscription } from 'umi';
import { getRemoteList, editRecord, deleteRecord, addRecord } from './service';
import { message } from 'antd';
import { SingleUserType } from '@/pages/users/data';

export interface UserState {
  data: SingleUserType[];
  meta: {
    total: number;
    per_page: number;
    page: number;
  };
}

interface UserModelType {
  namespace: 'users';
  state: UserState;
  reducers: {
    getList: Reducer<UserState>;
  };
  effects: {
    getRemote: Effect;
    edit: Effect;
    delete: Effect;
    add: Effect;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const UserModel: UserModelType = {
  namespace: 'users',
  state: {
    data: [],
    meta: {
      total: 0,
      per_page: 5,
      page: 1,
    },
  },
  reducers: {
    getList(state, { payload }) {
      return payload;
    },
  },
  effects: {
    *getRemote({ payload: { page, per_page } }, { put, call }) {
      const data = yield call(getRemoteList, { page, per_page });
      if (data) {
        yield put({
          type: 'getList',
          payload: data,
        });
      }
      console.log(data);
    },
    *edit({ payload: { id, values } }, { put, call }) {
      const data = yield call(editRecord, { id, values });
      if (data) {
        message.success('edit success');
        yield put({
          type: 'getRemote',
        });
      } else {
        message.error('edit failed');
      }
    },
    *add({ payload: { values } }, { put, call }) {
      const data = yield call(addRecord, { values });
      if (data) {
        message.success('add success');
        yield put({
          type: 'getRemote',
        });
      } else {
        message.success('add falied');
      }
    },
    *delete({ payload: { id } }, { put, call, select }) {
      const data = yield call(deleteRecord, { id });
      if (data) {
        message.success('deltete success');
        const { page, per_page } = yield select(
          (state: any) => state.users.meta,
        );
        yield put({
          type: 'getRemote',
          payload: {
            page,
            per_page,
          },
        });
      } else {
        message.success('deltete falied');
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((location) => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'getRemote',
            payload: {
              page: 1,
              per_page: 5,
            },
          });
        }
      });
    },
  },
};

export default UserModel;
