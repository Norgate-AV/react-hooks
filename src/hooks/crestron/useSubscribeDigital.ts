import { useState, useEffect } from "react";
import { subscribeState, unsubscribeState } from "@crestron/ch5-crcomlib";

/**
 * @deprecated
 * */
export const useSubscribeDigital = (signalName: string) => {
	const [feedback, setFeedback] = useState<boolean>(false);

	useEffect(() => {
		const subscriptionId = subscribeState(
			"boolean",
			signalName,
			(value: boolean) => {
				setFeedback(value);
			}
		);

		return () => {
			unsubscribeState("boolean", signalName, subscriptionId);
		};
	}, [signalName]);

	return feedback;
};

/**
 * @deprecated
 * */
export const useSubscribeBoolean = useSubscribeDigital;
