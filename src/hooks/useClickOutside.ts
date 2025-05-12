import { RefObject, useEffect } from 'react';

type ClickOutsideHandler = () => void;

interface UseClickOutsideProps {
  ref: RefObject<HTMLElement>;
  handler: ClickOutsideHandler;
  isOpen: boolean;
  additionalRefs?: RefObject<HTMLElement>[];
}

const useClickOutside = ({ ref, handler, isOpen, additionalRefs = [] }: UseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        additionalRefs.every((additionalRef) => {
          return !additionalRef.current || !additionalRef.current.contains(event.target as Node);
        })
      ) {
        handler();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, ref, handler, additionalRefs]);
};

export default useClickOutside;
