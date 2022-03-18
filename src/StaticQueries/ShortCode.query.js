import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ShortCodeQuery = () => {
  const {wpPage: {shortCodeContent: {testingContent}}} = useStaticQuery(graphql`
    {
      wpPage(title: {eq: "Home"}) {
        shortCodeContent {
          testingContent
        }
      }
    }
  `)
  return testingContent;
}

export default ShortCodeQuery;
