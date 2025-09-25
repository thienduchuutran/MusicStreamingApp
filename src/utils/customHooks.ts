import { useState, useEffect } from 'react';

//this hook returns True if component is already rendered, false otherwise
export const useHasMounted = () => {
    const [hasMounted, setHasMounted] = useState<boolean>(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    return hasMounted;
}
