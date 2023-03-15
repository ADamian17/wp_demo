import React from 'react';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import ShortCodeQuery from '../StaticQueries/ShortCode.query';

// An example component so we have something to return.
const NewsletterSignupForm = () => <div>News letter Signup Form</div>;

// Util function to handle the shortcode find/replace.
const handleShortcodes = (node) => {
  // It seems all shortcodes are P tags.
  // So we check that the node has a type, and that that type
  // is a tag.
  if (node.type && node.type === 'tag') {
    // If this tag has children, and it is the first child.
    // This may cause issues, but I have not had issues with it.
    // The first array is usually a shortcode is the first and
    // only child of a tag node.
    const shortcode = node.children[0]?.data;

    // If we find the shortcode string, replace it with
    // our component.
    if (shortcode === '[newsletter-form]') {
      return <NewsletterSignupForm />;
    }
  }

  // If nothing then return original node
  return node;
};

const Wysiwyg = ({ children }) => {
  const reactElements = parse(children || '', {
    replace: handleShortcodes,
  });
  return <div>{reactElements}</div>;
};

const PostTemplate = () => {
  const content = ShortCodeQuery();

  return (
    <>
      {/** Other code has been removed **/}
      <Wysiwyg>{content}</Wysiwyg>
    </>
  );
};

export default PostTemplate;
