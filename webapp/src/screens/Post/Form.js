import React, { Fragment, useState } from "react";

import { createPost } from "services/actions";
import { Button } from "components/UIHelpers";
import { PostSingleView } from "components/Post";

export default ({}) => {
  const [state, setState] = useState({
    title: "",
    content: "",
    tags_list: [],
  });

  const handleChangeTitle = (event) => {
    setState((_state) => ({
      ..._state,
      title: event.target.value,
    }));
  };
  const handleChangeContent = (event) => {
    setState((_state) => ({
      ..._state,
      content: event.target.value,
    }));
  };
  const handleSave = () => {
    createPost({
      ...state,
    });
  };

  return (
    <Fragment>
      <div className="container mx-auto my-2 px-3 py-1 max-w-xl">
        <div className="my-2">
          <input
            className="block w-full text-lg font-semibold leading-7 p-2 border rounded"
            type="text"
            value={state.title}
            onChange={handleChangeTitle}
          />
        </div>

        <div className="my-2">
          <textarea
            className="block w-full leading-6 p-2 border rounded"
            style={{
              minHeight: "12rem",
            }}
            value={state.content}
            onChange={handleChangeContent}
          ></textarea>
        </div>
      </div>

      <div className="container mt-4 mx-auto max-w-lg flex justify-center">
        <Button size="lg" padding="px-6" attributes={{ onClick: handleSave }}>
          Publish
        </Button>
      </div>
    </Fragment>
  );
};
