import React, { useState, useEffect } from 'react';

export function Sum(props) {
    const [sum, setSum] = useState(0);
    const [childrenSum, setChildrenSum] = useState('');

    useEffect(() => {
        const arr = React.Children.toArray(props.children);
        const arrayOfNumbers = arr.map(item => item.type())
        const ex = arrayOfNumbers.reduce((prev, cur) => prev + cur);
        setChildrenSum(arrayOfNumbers.join(' + '));
        setSum(ex);
    });

    return (
        <>
            <div>input: {childrenSum}</div>
            <div>sum: {sum}</div>
        </>
    );

}
