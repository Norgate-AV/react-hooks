import { publishEvent } from "@crestron/ch5-crcomlib";

/**
 * @deprecated since version 0.2.0.
 * Will be removed in the next major release.
 *
 * Please use `useCrestronPublishSerial` from {@link https://www.npmjs.com/package/@norgate-av/react-crestron-ch5-hooks @norgate-av/react-crestron-ch5-hooks} instead.
 * */
export const usePublishSerial = (signalName: string) => {
    return (value: string) => publishEvent("string", signalName, value);
};

/**
 * @deprecated since version 0.2.0.
 * Will be removed in the next major release.
 *
 * Please use `useCrestronPublishSerial` from {@link https://www.npmjs.com/package/@norgate-av/react-crestron-ch5-hooks @norgate-av/react-crestron-ch5-hooks} instead.
 * */
export const usePublishString = usePublishSerial;
export default usePublishSerial;
