import React from 'react';

export function useWillUnmountEffect(willUnmount: () => void) {
    React.useEffect(() => {
        return willUnmount;
    }, []);
}
