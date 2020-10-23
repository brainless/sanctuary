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

const sampleTitles = [
  "This year has been very rough, but I am surviving",
  "I went through a terrible fight yesterday, just want to let out",
  "Many years as a failing artist, I am struggling",
  "My peers make me feel I am an outsider, I want to quit",
];

export default ({}) => {
  return (
    <Fragment>
      {sampleTitles.map((title) => (
        <div className="container mx-auto my-2 max-w-xl">
          <Post inContainer={false} title={title}>
            {sampleContent}
          </Post>
        </div>
      ))}

      <div className="container mt-4 mx-auto max-w-lg flex justify-center">
        <Button
          theme="happy"
          element="link"
          size="lg"
          padding="px-6"
          attributes={{ to: "/wall" }}
        >
          Share your story safely
        </Button>
      </div>
    </Fragment>
  );
};
