import React from "react";
import { Link } from "react-router-dom";

import { Post, HashTag } from "components/UIHelpers";

export default ({ id, title, content, hashTags }) => {
  return (
    <div className="container mx-auto my-2 px-3 py-1 max-w-xl bg-white border cursor-pointer rounded-md hover:border-gray-500">
      <div className="text-xs mt-2">Posted 20 hours ago</div>

      <Post inBox={false} headingSize="3" inContainer={false} title={title}>
        {content}
      </Post>

      {hashTags && hashTags.length ? (
        <div className="mt-2 mb-2">
          {hashTags.map((tag, i) => {
            const temp = {
              id: i,
              label: tag,
              slug: tag,
            };
            return <HashTag key={`post-${id}-tag-${i}`} id={i} {...temp} />;
          })}
        </div>
      ) : null}
    </div>
  );
};
