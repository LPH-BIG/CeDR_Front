import { Effect, Reducer, Subscription } from '@@/plugin-dva/connect';
import { SubprojectItem } from '@/pages/Subproject/data';
import { getRemoteSubproject } from '@/pages/Subproject/service';
import { pathToRegexp } from 'path-to-regexp';

export interface SubprojectState {
  data: SubprojectItem[];
  meta: {
    total: number;
    pageSize: number;
    pageIndex: number;
  };
  status: number;
  message: string;
}
export interface SubprojectModelType {
  namespace: 'subproject';
  state: SubprojectState;
  reducers: {
    getList: Reducer<SubprojectState>;
  };
  effects: {
    getRemote: Effect;
    // getKeywords: Effect;
    // delete: Effect;
    // add: Effect;
  };
  subscriptions: {
    setup: Subscription;
  };
}
const SubprojectModel: SubprojectModelType = {
  namespace: 'subproject',
  state: {
    data: [],
    meta: {
      total: 10,
      pageSize: 10,
      pageIndex: 1,
    },
    status: 200,
    message: 'success',
  },

  reducers: {
    getList(state, { payload }) {
      return payload;
      // console.log(payload);
    },
  },
  effects: {
    *getRemote(
      {
        payload: {
          pageIndex,
          pageSize,
          project,
          subproject,
          celltype,
          drug,
          overlapgene,
          pcutoff,
          orcutoff,
        },
      },
      { put, call },
    ) {
      const data = yield call(getRemoteSubproject, {
        pageIndex,
        pageSize,
        project,
        subproject,
        celltype,
        drug,
        overlapgene,
        pcutoff,
        orcutoff,
      });
      if (data) {
        yield put({
          type: 'getList',
          payload: data,
        });
      }
      // console.log(data);
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const match = pathToRegexp('/subproject/:id').exec(location.pathname);
        if (match) {
          const id = match[1];
          const project = id.split(' ')[0];
          const subproject = id
            .split(' ')
            .slice(1, id.split(' ').length)
            .join(' ');
          // console.log(project);
          // console.log(subproject);
          dispatch({
            type: 'getRemote',
            payload: {
              pageIndex: 1,
              pageSize: 10,
              project: project,
              subproject: subproject,
            },
          });
        }
      });
    },
  },
};
export default SubprojectModel;
