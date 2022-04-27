import { useState, useEffect } from "react";
import { subscribeState, unsubscribeState } from "@crestron/ch5-crcomlib";

/**
 * @deprecated since version 0.2.0.
 * Will be removed in the next major release.
 *
 * Please use `useCrestronSubscribeAnalog` from {@link https://www.npmjs.com/package/@norgate-av/react-crestron-ch5-hooks @norgate-av/react-crestron-ch5-hooks} instead.
 * */
export const useSubscribeAnalog = (signalName: string) => {
    const [feedback, setFeedback] = useState<number>(0);

    useEffect(() => {
        const subscriptionId = subscribeState(
            "number",
            signalName,
            (value: number) => {
                setFeedback(value);
            },
        );

        return () => {
            unsubscribeState("number", signalName, subscriptionId);
        };
    }, [signalName]);

    return feedback;
};

/**
 * @deprecated since version 0.2.0.
 * Will be removed in the next major release.
 *
 * Please use `useCrestronSubscribeAnalog` from {@link https://www.npmjs.com/package/@norgate-av/react-crestron-ch5-hooks @norgate-av/react-crestron-ch5-hooks} instead.
 * */
export const useSubscribeNumber = useSubscribeAnalog;
export default useSubscribeAnalog;
