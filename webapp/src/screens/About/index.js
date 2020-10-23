import React, { Fragment } from "react";

import { Button, Post } from "components/UIHelpers";

const aboutPageContent = `
# sanctuary

A sacred and safe place for people who are in mentally stressful situations - living with psychological conditions like anxiety, depression, paranoia, stress disorder, attention issues or any other.


## Rules of sanctuary
Simple rules guide the sanctuary:

 - Share only what you are going through, not what you feel about someone else
 - Reply to someone's post only if you have something positive or supportive, anything else will be flagged and removed
 - Posts/replies are always anonymous - we do not track the author of the content at all
 - You have to login with an email only as a spam prevention mechanism
 - Optionally, you can get a link to any post you create so you can come back later, but the site still does not track you
 - Professional counselors may join and help, only if they declare themselves as such
 - Rules guiding the system, except the ones about anonymity, can be decided by the community

All software behind Sanctuary will be open source, [maintained on GitHub](https://github.com/brainless/sanctuary). Infrastructure will be run by donations from hosting companies. Sanctuary will be completely free to join and use.
`;

export default ({}) => {
  return (
    <Fragment>
      <Post isMarkdown>{aboutPageContent}</Post>

      <div className="container mt-4 mx-auto max-w-lg flex justify-center">
        <Button
          theme="happy"
          element="link"
          size="lg"
          padding="px-6"
          attributes={{ to: "/wall" }}
        >
          Public wall
        </Button>
      </div>
    </Fragment>
  );
};
