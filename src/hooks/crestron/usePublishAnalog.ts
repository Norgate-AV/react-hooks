import { publishEvent } from "@crestron/ch5-crcomlib";

export const usePublishAnalog = (signalName: string) => {
    return (value: number) => publishEvent("number", signalName, value);
}

export const usePublishNumber = usePublishAnalog;
