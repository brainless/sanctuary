import axios from "axios";

export const createPost = async (payload) => {
  const url = "/api/posts/";

  await axios({
    method: "POST",
    url,
    data: payload,
  });
};
