import { useEffect, useState } from 'react';

type Dimension = {
    width: number;
    height: number;
}

const getDimensions = (): Dimension => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
};

const useDimensions = () => {
    const [dimensions, setDimensions] = useState<Dimension>(getDimensions());

    useEffect(() => {
        const onResize = () => {
            setDimensions(getDimensions());
        };

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return dimensions;
};

export default useDimensions;