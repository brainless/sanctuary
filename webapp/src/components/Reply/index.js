import React, { Fragment } from "react";

import { Post } from "components/UIHelpers";

export default ({ id, content, createdAt }) => {
  return (
    <div className="container mx-auto my-2 px-3 py-1 max-w-xl bg-gray-200 rounded-md">
      <div className="text-xs mt-2">Posted 20 hours ago</div>

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
  );
};
