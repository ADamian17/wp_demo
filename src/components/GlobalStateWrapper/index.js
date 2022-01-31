import React from 'react';
import { RecoilRoot } from 'recoil'

const GlobalStateWrapper = ({ children }) => {
  return (
    <React.StrictMode>
      <RecoilRoot>
        {children}
      </RecoilRoot>
    </React.StrictMode>
  )
}

export default GlobalStateWrapper;
