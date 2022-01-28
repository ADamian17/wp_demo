const React = require("react");
const GobalStateWrapper = require('./src/GlobalStateWrapper').default;
// const RootElementWrapper = require('./src/components/RootElementWrapper/RootElementWrapper').default;

// Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return (
//     <RootElementWrapper {...props}>
//       {element}
//     </RootElementWrapper>
//   )
// }

exports.wrapRootElement = ({ element }) => {
  return (
    <GobalStateWrapper>
      {element}
    </GobalStateWrapper>
  )
}
