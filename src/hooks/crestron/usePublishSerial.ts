import { publishEvent } from "@crestron/ch5-crcomlib";

export const usePublishSerial = (signalName: string) => {
    return (value: string) => publishEvent("string", signalName, value);
}

export const usePublishString = usePublishSerial;
