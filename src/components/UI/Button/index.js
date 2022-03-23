import React from 'react'
import * as btnStyles from './Button.module.scss';

const getClassesFormStyleModule = ( otherClasses, styleModule) => {
  const temp = []
}

const addMultipleClassNames = (base, variant, styleModule) => {
  return [ styleModule[base], styleModule[variant]].join(' ')
}

const Button = ({children, variant, ...rest}) => {
  return(
    <button className={addMultipleClassNames('btn', variant, btnStyles)} {...rest}>
      {children}
    </button>
  )
}

export default Button