import React from 'react';

const PageElementWrapper = ({ children, ...rest }) => {
  return <div id="my-app" {...rest}>{children}</div>
}

export default PageElementWrapper;
