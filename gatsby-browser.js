const React = require("react");
const GobalStateWrapper = require('./src/components/GlobalStateWrapper').default;
const PageElementWrapper = require('./src/components/PageElementWrapper').default;

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <PageElementWrapper {...props}>{element}</PageElementWrapper>
}

exports.wrapRootElement = ({ element }) => {
  return (
    <GobalStateWrapper>
      {element}
    </GobalStateWrapper>
  )
}
