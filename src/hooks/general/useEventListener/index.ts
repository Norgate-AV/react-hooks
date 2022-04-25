import { useEffect, useRef } from "react";

export const useEventListener = (
    eventType: keyof GlobalEventHandlersEventMap,
    listener: EventListener,
    target: GlobalEventHandlers = window,
    options: any = null,
) => {
    const savedListener = useRef<EventListener>();

    useEffect(() => {
        savedListener.current = listener;
    }, [listener]);

    useEffect(() => {
        if (!target?.addEventListener) return;

        const eventListener: EventListener = (event: Event) => {
            if (!savedListener.current) return;

            savedListener.current(event);
        };

        target.addEventListener(eventType, eventListener, options);

        // eslint-disable-next-line consistent-return
        return () => {
            target.removeEventListener(eventType, eventListener, options);
        };
    }, [eventType, target, options]);
};

export default useEventListener;
