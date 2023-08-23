import React from 'react';

export function Comp() {
    const [stateValue] = React.useState('initial value');

    return <span>{stateValue}</span>;
}
