import {useState, useEffect, useRef} from 'react';
import {Dimensions} from 'react-native';

const useIsInViewPort = () => {
  const [isInViewPort, setIsInViewPort] = useState(false);
  const componentRef = useRef<any>(null);

  const checkIfInViewPort = () => {
    if (componentRef.current) {
      componentRef.current.measure((height: number, pageY: number) => {
        const windowHeight = Dimensions.get('window').height;
        const windowWidth = Dimensions.get('window').width;

        // Check if the component is within the visible window bounds
        if (pageY >= 0 && pageY + height <= windowHeight) {
          setIsInViewPort(true);
        } else {
          setIsInViewPort(false);
        }
      });
    }
  };

  useEffect(() => {
    // Check on mount
    checkIfInViewPort();

    // Listen for window size changes (optional)
    const subscription = Dimensions.addEventListener(
      'change',
      checkIfInViewPort,
    );

    return () => subscription?.remove();
  }, []);

  return {componentRef, isInViewPort, checkIfInViewPort};
};

export default useIsInViewPort;
