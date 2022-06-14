import {configureStore} from '@reduxjs/toolkit';
import favList from './stores/favList';

export default configureStore({
  reducer: {
    favList: favList,
  },
});
