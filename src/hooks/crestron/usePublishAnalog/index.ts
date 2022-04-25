import { publishEvent } from "@crestron/ch5-crcomlib";

/**
 * @deprecated since version 0.1.3.
 * Will be removed in the next major release.
 *
 * Please use `useCrestronPublishAnalog` from {@link https://www.npmjs.com/package/@norgate-av/react-crestron-ch5-hooks @norgate-av/react-crestron-ch5-hooks} instead.
 * */
export const usePublishAnalog = (signalName: string) => {
    return (value: number) => publishEvent("number", signalName, value);
};

/**
 * @deprecated since version 0.1.3.
 * Will be removed in the next major release.
 *
 * Please use `useCrestronPublishAnalog` from {@link https://www.npmjs.com/package/@norgate-av/react-crestron-ch5-hooks @norgate-av/react-crestron-ch5-hooks} instead.
 * */
export const usePublishNumber = usePublishAnalog;
export default usePublishAnalog;
