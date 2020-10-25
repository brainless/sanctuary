import React, { Fragment, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

import { useData } from "services/store";
import { Button } from "components/UIHelpers";
import { PostSingleView } from "components/Post";

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

      <div className="container mt-4 mx-auto max-w-lg flex justify-center">
        <Button
          element="link"
          size="lg"
          padding="px-6"
          attributes={{ to: "/wall" }}
        >
          Share your support
        </Button>
      </div>
    </Fragment>
  );
};
