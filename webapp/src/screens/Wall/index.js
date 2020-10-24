import React, { Fragment } from "react";

import { Button } from "components/UIHelpers";
import { PostInListView } from "components/Post";

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

const sampleTags = [
  "venting-out",
  "life-story",
  "seeking-help",
  "thank-you",
  "depression",
];

const shuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export default ({}) => {
  return (
    <Fragment>
      {sampleTitles.map((title, i) => (
        <PostInListView
          key={`wall-post-${i}`}
          id={i + 1}
          title={title}
          content={sampleContent}
          hashTags={shuffle([...sampleTags])}
        />
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
