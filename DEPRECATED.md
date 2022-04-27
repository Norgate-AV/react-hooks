# DEPRECATION NOTICE

The following Crestron related hooks in this library are now deprecated and will be removed in the next major version:

-   usePublishAnalog
-   usePublishDigital
-   usePublishSerial
-   useSubscribeAnalog
-   useSubscribeDigital
-   useSubscribeSerial
-   useWebXPanel

These hooks will no longer be maintained and will receive no further updates.

For Crestron related hooks, please use the following package instead: [@norgate-av/react-crestron-ch5-hooks](https://www.npmjs.com/package/@norgate-av/react-crestron-ch5-hooks)

The usage of these new hooks is slightly different, but migrating to the new package is recommended and should not be too hard. Usage examples are fully documented. They offer the same feature set as the old hooks and more, with a more consistent API.
