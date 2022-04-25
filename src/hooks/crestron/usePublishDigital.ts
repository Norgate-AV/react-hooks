import { publishEvent } from "@crestron/ch5-crcomlib";

/**
 * @deprecated
 * */
export const usePublishDigital = (signalName: string) => {
	return (value: boolean) => publishEvent("boolean", signalName, value);
};

/**
 * @deprecated
 * */
export const usePublishBoolean = usePublishDigital;
