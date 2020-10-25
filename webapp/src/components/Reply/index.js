import React, { Fragment } from "react";

import HeartIcon from "assets/icons8-heart-48.png";
import { likeReply } from "services/actions";
import { Post } from "components/UIHelpers";

export default ({ id, content, likesCount, createdAt }) => {
  const handleClickLike = () => {
    likeReply({
      reply_id: id,
    });
  };

  return (
    <div className="container mx-auto my-2 max-w-xl bg-gray-200 rounded-md">
      <div className="px-3 py-2">
        <Post inBox={false} inContainer={false}>
          <Fragment>
            {content &&
              content.split("\n").map((x, i) => (
                <p className="text-sm" key={`post-${id}-p-${i}`}>
                  {x}
                </p>
              ))}
          </Fragment>
        </Post>
      </div>

      <div className="flex px-3 py-1 bg-gray-300 rounded-md rounded-t-none">
        <div className="text-gray-700 text-xs leading-6 pr-2">{likesCount}</div>
        <div className="flex-grow">
          <span
            className="px-1 cursor-pointer text-gray-300 hover:text-gray-600"
            onClick={handleClickLike}
          >
            <img
              className="inline-block w-6"
              src={HeartIcon}
              alt="Heart icon"
            />
            <span className="inline-block pl-1 text-sm font-medium">Like!</span>
          </span>
        </div>
        <div className="text-gray-700 text-xs leading-6">
          Posted 20 hours ago
        </div>
      </div>
    </div>
  );
};
