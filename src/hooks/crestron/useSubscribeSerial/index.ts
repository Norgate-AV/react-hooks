import { useState, useEffect } from "react";
import { subscribeState, unsubscribeState } from "@crestron/ch5-crcomlib";

/**
 * @deprecated since version 0.2.0.
 * Will be removed in the next major release.
 *
 * Please use `useCrestronSubscribeSerial` from {@link https://www.npmjs.com/package/@norgate-av/react-crestron-ch5-hooks @norgate-av/react-crestron-ch5-hooks} instead.
 * */
export const useSubscribeSerial = (signalName: string) => {
    const [feedback, setFeedback] = useState<string>("");

    useEffect(() => {
        const subscriptionId = subscribeState(
            "string",
            signalName,
            (value: string) => {
                setFeedback(value);
            },
        );

        return () => {
            unsubscribeState("string", signalName, subscriptionId);
        };
    }, [signalName]);

    return feedback;
};

/**
 * @deprecated since version 0.2.0.
 * Will be removed in the next major release.
 *
 * Please use `useCrestronSubscribeSerial` from {@link https://www.npmjs.com/package/@norgate-av/react-crestron-ch5-hooks @norgate-av/react-crestron-ch5-hooks} instead.
 * */
export const useSubscribeString = useSubscribeSerial;
export default useSubscribeSerial;
