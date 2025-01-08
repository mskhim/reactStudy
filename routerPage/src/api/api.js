import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // 스프링부트 API의 기본 URL
  headers: {
    "Content-Type": "application/json",
  },
});

// 게시글 전체 조회
export const fetchBoards = async () => {
  const response = await api.get("/boards");
  return response.data;
};

// 게시글 조회 (id로)
export const fetchBoardById = async (id) => {
  const response = await api.get(`/boards/${id}`);
  return response.data;
};

// 게시글 등록
export const createBoard = async (board) => {
  const response = await api.post("/boards", board);
  return response.data;
};

// 게시글 수정
export const updateBoard = async (id, board) => {
  const response = await api.put(`/boards/${id}`, board);
  return response.data;
};

// 게시글 삭제
export const deleteBoard = async (id) => {
  await api.delete(`/boards/${id}`);
};

export default api;
