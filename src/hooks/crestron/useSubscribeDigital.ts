import { useState, useEffect } from "react";
import { subscribeState, unsubscribeState } from "@crestron/ch5-crcomlib";

/**
 * @deprecated since version 0.1.3.
 * Will be removed in the next major release.
 *
 * Please use `useCrestronSubscribeDigital` from {@link https://www.npmjs.com/package/@norgate-av/react-crestron-ch5-hooks @norgate-av/react-crestron-ch5-hooks} instead.
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
 * @deprecated since version 0.1.3.
 * Will be removed in the next major release.
 *
 * Please use `useCrestronSubscribeDigital` from {@link https://www.npmjs.com/package/@norgate-av/react-crestron-ch5-hooks @norgate-av/react-crestron-ch5-hooks} instead.
 * */
export const useSubscribeBoolean = useSubscribeDigital;
