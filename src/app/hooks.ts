import { useDispatch } from 'react-redux';
import store from './store';

export const useAppDispatch = () => {
  return useDispatch<typeof store.dispatch>();
};