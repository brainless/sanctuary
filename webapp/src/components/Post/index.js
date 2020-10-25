import React, { Fragment } from "react";
import slugify from "slugify";

import { Post, HashTag } from "components/UIHelpers";

export const PostInListView = ({ id, title, content, hashTags }) => {
  return (
    <div className="container mx-auto my-2 px-3 py-1 max-w-xl bg-white border-2 cursor-pointer rounded-md hover:border-gray-500">
      <div className="text-xs mt-2">Posted 20 hours ago</div>

      <Post
        inBox={false}
        headingSize="3"
        inContainer={false}
        title={title}
        titleLink={`/posts/${id}/${slugify(title, { lower: true })}/`}
      >
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

export const PostSingleView = ({ id, title, content, hashTags }) => {
  return (
    <Fragment>
      <div className="container mx-auto mt-2 px-3 py-1 max-w-xl bg-white">
        <div className="text-xs mt-2">Posted 20 hours ago</div>

        <Post inBox={false} headingSize="2" inContainer={false} title={title} />
      </div>

      <div className="container mx-auto my-2 px-3 py-3 max-w-xl bg-white rounded-md">
        <Post inBox={false} inContainer={false}>
          <Fragment>
            {content &&
              content
                .split("\n")
                .map((x, i) => <p key={`post-${id}-p-${i}`}>{x}</p>)}
          </Fragment>
        </Post>

        {hashTags && hashTags.length ? (
          <div className="mt-2 mb-2">
            {hashTags.map((tag, i) => {
              return <HashTag key={`post-${id}-tag-${i}`} isLink slug={tag} />;
            })}
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};
