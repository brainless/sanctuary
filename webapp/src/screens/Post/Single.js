import React, { Fragment, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

import { useData } from "services/store";
import { PostSingleView } from "components/Post";
import ReplyInListView from "components/Reply";
import Reply from "./Reply";

const ReplyList = ({}) => {
  const match = useRouteMatch();
  const { postId } = match.params;
  const url = `/api/replies/list-for-post/${parseInt(postId)}/`;
  const fetchData = useData((state) => state.fetchData);
  const data = useData((state) => state[url]);
  useEffect(() => {
    if (!postId || !parseInt(postId)) {
      return false;
    }
    fetchData(url);
  }, []);

  if (!data) {
    return <Fragment>Loading</Fragment>;
  }

  return (
    <Fragment>
      {data.responsePayload.map((reply, i) => (
        <ReplyInListView
          key={`post-${postId}-re-${i}`}
          id={reply.id}
          content={reply.content}
          likesCount={reply.likes_count}
          createdAt={reply.created_at}
        />
      ))}
    </Fragment>
  );
};

export default ({ previewPayload = undefined }) => {
  const match = useRouteMatch();
  const { postId } = match.params;
  const url = `/api/posts/${parseInt(postId)}/`;
  const fetchData = useData((state) => state.fetchData);
  const data = useData((state) => state[url]);
  useEffect(() => {
    if (previewPayload !== undefined) {
      // We are being asked to preview from the Post form
      // No need to fetch data
      return false;
    }
    if (!postId || !parseInt(postId)) {
      return false;
    }
    fetchData(url);
  }, []);

  if (!data) {
    return <Fragment>Loading</Fragment>;
  }

  const post = data.responsePayload;

  return (
    <Fragment>
      <PostSingleView
        id={post.id}
        title={post.title}
        content={post.content}
        createdAt={post.created_at}
        hashTags={post.tags}
      />

      <ReplyList />

      <Reply />
    </Fragment>
  );
};
