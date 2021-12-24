import React from 'react';

export function useForceUpdate() {
    const [, setState] = React.useState<any>();
    return React.useCallback(() => setState({}), []);
}
