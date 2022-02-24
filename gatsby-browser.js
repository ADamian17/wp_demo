const React = require("react");
const {RecoilRoot} = require("recoil")
const GobalStateWrapper = require('./src/components/GlobalStateWrapper').default;
const { useModalContextProvider } = require('./src/hooks');

exports.wrapRootElement = ({ element }) => {
  const ModalProvider = useModalContextProvider()
  return (
    <RecoilRoot>
      <ModalProvider>
        {element}
      </ModalProvider>
    </RecoilRoot>
  )
}
