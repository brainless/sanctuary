import axios from "axios";

export const createPost = async (payload) => {
  const url = "/api/posts/";

  await axios({
    method: "POST",
    url,
    data: payload,
  });
};

export const replyToPost = async (payload) => {
  const url = "/api/replies/add-to-post/";

  await axios({
    method: "POST",
    url,
    data: payload,
  });
};

export const likeReply = async (payload) => {
  const url = "/api/replies/add-like/";

  await axios({
    method: "POST",
    url,
    data: payload,
  });
};
