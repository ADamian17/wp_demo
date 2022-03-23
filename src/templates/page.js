import React, { useEffect } from 'react';
import DefaultLayout from '../components/DefaultLayout';

import { useSetRecoilState } from 'recoil';
import { modalSelector, setTimeoutSelector } from '../recoil/selectors';
import Modal from '../components/UI/Modal';
import PostTemplate from '../components/NewLetter';
import Button from '../components/UI/Button';

const Page = ({ pageContext }) => {
  const setModal = useSetRecoilState(modalSelector);
  const setTimeoutHandler = useSetRecoilState(setTimeoutSelector);

  const handleMouseLeave = (event) => {
    if (event.clientY <= 0 ||
      event.clientX <= 0 ||
      (event.clientX >= window.innerWidth ||
        event.clientY >= window.innerHeight
      )
    ) {
      if (pageContext.template.modalTrigger.triggerId) {
        setModal(pageContext.template.modalTrigger.triggerId)
      }
    }
  };

  useEffect(() => {
    if (pageContext.template.modalTrigger.triggerId) {
      const handleShowModal = () => {
        setModal(pageContext.template.modalTrigger.triggerId)
      }
      
      // setTimeoutHandler(setTimeout(handleShowModal, 2000))
    }

    // document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      // document.removeEventListener('mouseleave', handleMouseLeave);
    }

  }, [])

  return (
    <DefaultLayout>
      <h1>{pageContext.title}</h1>
      <PostTemplate />
      
      <Button variant='btn__danger'>
        Click
      </Button>

      <Modal modalSlug={pageContext.template.modalTrigger.triggerId} />
    </DefaultLayout>
  )
}

export default Page;
