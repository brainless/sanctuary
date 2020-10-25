import React, { Fragment, useEffect } from "react";

import { useData } from "services/store";
import { Button } from "components/UIHelpers";
import { PostInListView } from "components/Post";

export default ({}) => {
  const url = "/api/posts/";
  const fetchData = useData((state) => state.fetchData);
  const data = useData((state) => state[url]);
  useEffect(() => {
    fetchData(url);
  }, []);

  if (!data) {
    return <Fragment>Loading</Fragment>;
  }

  return (
    <Fragment>
      {data.responsePayload.map((post, i) => (
        <PostInListView
          key={`wall-post-${post.id}`}
          id={post.id}
          title={post.title}
          content={post.content}
          hashTags={post.tags}
        />
      ))}

      <div className="container mt-4 mx-auto max-w-lg flex justify-center">
        <Button
          theme="happy"
          element="link"
          size="lg"
          padding="px-6"
          attributes={{ to: "/posts/share" }}
        >
          Share your story safely
        </Button>
      </div>
    </Fragment>
  );
};
