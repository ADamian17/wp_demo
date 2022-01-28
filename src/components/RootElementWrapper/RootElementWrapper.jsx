import React from 'react';

const RootElementWrapper = ({ children, ...rest }) => {
  return <div id="sp_app">{children}</div>
}

export default RootElementWrapper;
