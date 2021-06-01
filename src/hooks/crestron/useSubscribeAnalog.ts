import { useState, useEffect } from "react"
import { subscribeState, unsubscribeState } from "@crestron/ch5-crcomlib";

export const useSubscribeAnalog = (signalName: string) => {
    const [feedback, setFeedback] = useState<number>(0);

    useEffect(() => {
        
        const subscriptionId = subscribeState("number", signalName, setFeedback);

        return () => {
            unsubscribeState("number", signalName, subscriptionId);
        }

    }, [signalName]);

    return feedback;
}

export const useSubscribeNumber = useSubscribeAnalog;
