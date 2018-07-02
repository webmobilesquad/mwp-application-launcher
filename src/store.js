import createStore from 'unistore';

export const store = createStore({
  applications: {
    data: null,
    loading: false,
  },
});
