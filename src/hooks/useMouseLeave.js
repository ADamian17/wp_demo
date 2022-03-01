import React, {useEffect} from 'react';

export const useMouseLeave = () => {

  

  useEffect(() => {
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [])
}
