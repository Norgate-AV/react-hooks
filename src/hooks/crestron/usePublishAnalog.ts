import { publishEvent } from "@crestron/ch5-crcomlib";

/**
 * @deprecated
 * */
export const usePublishAnalog = (signalName: string) => {
	return (value: number) => publishEvent("number", signalName, value);
};

/**
 * @deprecated
 * */
export const usePublishNumber = usePublishAnalog;
