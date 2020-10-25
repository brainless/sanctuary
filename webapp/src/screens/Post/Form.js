import React, { Fragment, useEffect, useState } from "react";
import Downshift from "downshift";

import { useData } from "services/store";
import { createPost } from "services/actions";
import { Button } from "components/UIHelpers";
import { PostSingleView } from "components/Post";

const Select = ({ handleChange }) => {
  const allTagsURL = "/api/tags/";
  const fetchData = useData((state) => state.fetchData);
  const allTagsData = useData((state) => state[allTagsURL]);
  useEffect(() => {
    fetchData(allTagsURL);
  }, []);

  if (!allTagsData || !allTagsData.isReady) {
    return <Fragment>Loading</Fragment>;
  }
  const items = allTagsData.responsePayload.map((x) => ({ value: x }));
  const itemClasses =
    "inline-block px-1 m-1 leading-6 bg-gray-300 rounded cursor-pointer hover:bg-gray-700 hover:text-white";

  return (
    <Downshift
      onChange={handleChange}
      itemToString={(item) => (item ? item.value : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps,
      }) => (
        <Fragment>
          <label {...getLabelProps()} className="block font-semibold">
            Tags
          </label>
          <div {...getRootProps({}, { suppressRefError: true })}>
            <input
              {...getInputProps()}
              className="block w-full font-medium leading-6 p-2 border rounded"
              placeholder="Type to select tags"
            />
          </div>
          <div {...getMenuProps()} className="py-2">
            {isOpen
              ? items
                  .filter(
                    (item) => !inputValue || item.value.includes(inputValue)
                  )
                  .map((item, index) => (
                    <span
                      {...getItemProps({
                        key: item.value,
                        index,
                        item,
                      })}
                      className={itemClasses}
                    >
                      {item.value}
                    </span>
                  ))
              : null}
          </div>
        </Fragment>
      )}
    </Downshift>
  );
};

export default ({}) => {
  const [state, setState] = useState({
    title: "",
    content: "",
    tagsList: [],
  });

  const handleTitleChange = (event) => {
    setState((_state) => ({
      ..._state,
      title: event.target.value,
    }));
  };
  const handleContentChange = (event) => {
    setState((_state) => ({
      ..._state,
      content: event.target.value,
    }));
  };
  const handleSave = () => {
    createPost({
      title: state.title,
      content: state.content,
      tags_list: state.tagsList,
    });
  };

  const handleTagsChange = (selection) => {
    setState((_state) => ({
      ...state,
      tagsList: [..._state.tagsList, selection.value],
    }));
  };

  return (
    <Fragment>
      <div className="container mx-auto my-2 px-3 py-1 max-w-xl">
        <div className="my-2">
          <label className="block font-semibold">Title</label>
          <input
            className="block w-full text-lg font-semibold leading-7 p-2 border rounded"
            type="text"
            value={state.title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="my-4">
          <label className="block font-semibold">Message</label>
          <textarea
            className="block w-full leading-6 p-2 border rounded"
            style={{
              minHeight: "12rem",
            }}
            value={state.content}
            onChange={handleContentChange}
          ></textarea>
        </div>

        <div className="my-2">
          <Select handleChange={handleTagsChange} />
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
