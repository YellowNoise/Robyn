import { ArbitraryRequest, ArbitraryResponse } from '@/types';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { SetStateAction } from 'react';

export type Props = {
    input: string,
    outputFn: React.Dispatch<React.SetStateAction<string>>,
}

export default function Iobutton(
    props: Props,
)   {
    props.input
    const [isLoading, setIsLoading] = useState<string>();
    function handleClick() {
        const bodyObj : ArbitraryRequest = {
            arbitraryString: props.input,
        }
        const request : RequestInit = {
            method: "POST",
            body: JSON.stringify(bodyObj),
        }

        fetch("/model", request).then(
            (response) => {
                console.log(response);
                return response.json();
            }
        ).then((response: ArbitraryResponse) => {
            console.log(response);
            console.log(response.arbitraryString);
            props.outputFn(response.arbitraryString);
            console.log("response completed");
        });

    }
    return (
        <div><button onClick={handleClick}>Some Button Text</button></div>
    );
}
