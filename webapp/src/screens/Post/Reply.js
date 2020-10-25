import React, { Fragment, useState } from "react";
import { useRouteMatch } from "react-router-dom";

import { replyToPost } from "services/actions";
import { Button } from "components/UIHelpers";

export default ({}) => {
  const match = useRouteMatch();
  const { postId } = match.params;
  const [state, setState] = useState({
    content: "",
  });

  const handleContentChange = (event) => {
    setState((_state) => ({
      ..._state,
      content: event.target.value,
    }));
  };
  const handleSave = () => {
    replyToPost({
      post_id: postId,
      content: state.content,
      reply_type: "text",
    });
  };

  return (
    <Fragment>
      <div className="container mx-auto mt-2 py-1 max-w-xl">
        <div className="my-4">
          <label className="block font-semibold">Comment</label>
          <textarea
            className="block w-full leading-6 p-2 border rounded"
            style={{
              minHeight: "12rem",
            }}
            value={state.content}
            onChange={handleContentChange}
          ></textarea>
        </div>
      </div>

      <div className="container mb-2 mx-auto max-w-lg flex justify-center">
        <Button size="lg" padding="px-6" attributes={{ onClick: handleSave }}>
          Share your support
        </Button>
      </div>
    </Fragment>
  );
};
