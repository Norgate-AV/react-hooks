import { publishEvent } from "@crestron/ch5-crcomlib";

/**
 * @deprecated
 * */
export const usePublishSerial = (signalName: string) => {
	return (value: string) => publishEvent("string", signalName, value);
};

/**
 * @deprecated
 * */
export const usePublishString = usePublishSerial;
