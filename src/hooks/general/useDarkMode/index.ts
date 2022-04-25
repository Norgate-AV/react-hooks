import { useEffect } from "react";
import { useMediaQuery } from "../useMediaQuery";
import { useLocalStorage } from "../useLocalStorage";

export const useDarkMode = () => {
    const preferDarkMode = useMediaQuery(
        ["(prefers-color-scheme: dark)"],
        [true],
        false,
    );

    const [enabled, setEnabled] = useLocalStorage("dark-mode", preferDarkMode);

    useEffect(() => {
        if (enabled) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [enabled]);

    return [enabled, setEnabled];
};

export default useDarkMode;
