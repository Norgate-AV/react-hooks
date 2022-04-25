import { useState, useEffect } from "react";
import { subscribeState, unsubscribeState } from "@crestron/ch5-crcomlib";

/**
 * @deprecated
 * */
export const useSubscribeAnalog = (signalName: string) => {
	const [feedback, setFeedback] = useState<number>(0);

	useEffect(() => {
		const subscriptionId = subscribeState(
			"number",
			signalName,
			(value: number) => {
				setFeedback(value);
			}
		);

		return () => {
			unsubscribeState("number", signalName, subscriptionId);
		};
	}, [signalName]);

	return feedback;
};

/**
 * @deprecated
 * */
export const useSubscribeNumber = useSubscribeAnalog;
