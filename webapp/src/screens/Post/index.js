import React, { Fragment } from "react";

import { Button, Post } from "components/UIHelpers";

const sampleContent = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
culpa qui officia deserunt mollit anim id est laborum.
`;

export default ({}) => {
  return (
    <Fragment>
      <Post>{sampleContent}</Post>

      <div className="container mt-4 mx-auto max-w-lg flex justify-center">
        <Button
          theme="happy"
          element="link"
          size="lg"
          padding="px-6"
          attributes={{ to: "/wall" }}
        >
          Publish
        </Button>
      </div>
    </Fragment>
  );
};
