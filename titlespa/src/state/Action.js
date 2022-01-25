import { getAllTitle, findTitle, getDetail } from "../api/api";
import {startLoading,setList,endLoading} from "./Slice";

export const getAction = () => async (dispatch) => {
  try {
    const { data } = await getAllTitle();
    dispatch(setList(data));
  } catch (error) {
    console.log(error);
  }
};

export const findAction = (keyword) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await findTitle(keyword);
    dispatch(setList(data));
    dispatch(endLoading());} catch (error) {
    console.log(error);
  }
};

export const getDetailAction = (id) => async (dispatch) => {
  try {
    const { data } = await getDetail(id);
    return data;
  } catch (error) {
    return null;}
};
