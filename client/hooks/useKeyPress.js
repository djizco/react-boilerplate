import { useEffect } from 'react';

export default function useKeyPress(callback, key, active = true) {
  const handleKeyPress = e => {
    if (active && e.key === key) {
      callback();
    }
  };

  useEffect(() => {
    if (active) {
      window.addEventListener('keypress', handleKeyPress);
    }
    return () => {
      if (active) {
        window.removeEventListener('keypress', handleKeyPress);
      }
    };
  }, [active, callback]);
}
