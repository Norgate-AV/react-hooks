import { publishEvent } from "@crestron/ch5-crcomlib";

export const usePublishDigital = (signalName: string) => {
    return (value: boolean) => publishEvent("boolean", signalName, value);
};

export const usePublishBoolean = usePublishDigital;
