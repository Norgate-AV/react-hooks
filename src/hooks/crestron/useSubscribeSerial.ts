import { useState, useEffect } from "react";
import { subscribeState, unsubscribeState } from "@crestron/ch5-crcomlib";

export const useSubscribeSerial = (signalName: string) => {
	const [feedback, setFeedback] = useState<string>("");

	useEffect(() => {
		const subscriptionId = subscribeState(
			"string",
			signalName,
			(value: string) => {
				setFeedback(value);
			}
		);

		return () => {
			unsubscribeState("string", signalName, subscriptionId);
		};
	}, [signalName]);

	return feedback;
};

export const useSubscribeString = useSubscribeSerial;
