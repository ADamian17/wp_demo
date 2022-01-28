import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import MainNav from '../components/Primary-nav';

const Page = ({ pageContext }) => {
  return (
    <DefaultLayout>
      <h1>{pageContext.title}</h1>
    </DefaultLayout>
  )
}

export default Page;
