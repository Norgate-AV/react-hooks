import { useState, useEffect, useCallback } from "react"

export const useMediaQuery = (queries: any = [], values: any = [], defaultValue: any) => {
    const mediaQueryList = queries.map((q: any) => window.matchMedia(q));

    const getValue = useCallback(() => {
        const index = mediaQueryList.findIndex((mql: any) => mql.matches());
        return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
    }, [mediaQueryList, values, defaultValue]);

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        const handler = () => setValue(getValue);
        mediaQueryList.forEach((mql: any) => mql.addEventListener('change', handler));

        return () => {
            mediaQueryList.forEach((mql: any) => mql.removeEventListener('change', handler));
        }

    }, [getValue, mediaQueryList]);

    return value;
};