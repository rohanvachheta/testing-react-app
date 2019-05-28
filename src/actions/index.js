import { SAVE_COMMENTS, FETCH_COMMENTS } from "./types";
import axios from "axios";

export const AddComment = comment => {
  return {
    type: SAVE_COMMENTS,
    payload: comment
  };
};

export const fetchComments = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );
  return {
    type: FETCH_COMMENTS,
    payload: response.data
  };
};
