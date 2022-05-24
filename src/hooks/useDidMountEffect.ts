import React from "react";

export function useDidMountEffect(onMount: () => void) {
    React.useEffect(() => {
        onMount();
    }, []);
}
