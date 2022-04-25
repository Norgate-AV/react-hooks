import WebXPanel, {
    WebXPanelConfigParams,
    isActive,
    getVersion,
    getBuildDate,
    WebXPanelEvents,
} from "@crestron/ch5-webxpanel";

/**
 * @deprecated since version 0.1.3.
 * Will be removed in the next major release.
 *
 * There is currently no replacement planned for this hook.
 * If you need to use this hook, it is recommended to implement
 * a copy of it in your local project.
 * */
export const useWebXPanel = (host = "", ipId = "0x03", roomId = "") => {
    console.log(`WebXPanel version: ${getVersion()}`);
    console.log(`WebXPanel build date: ${getBuildDate()}`);

    const config: Partial<WebXPanelConfigParams> = {
        host,
        ipId,
        roomId,
    };

    console.log("WebXPanel Configuration");
    console.log(config);

    console.log(`WebXPanel.isActive = ${isActive}`);
    if (isActive) {
        console.log("Setting up WebXPanel config...");
        WebXPanel.initialize(config);
    }

    WebXPanel.addEventListener(
        WebXPanelEvents.CONNECT_CIP,
        ({ detail }: any) => {
            const { url, ipId, roomId } = detail;
            console.log(
                `Connected to ${url}, 0x${ipId.toString(16)}, ${roomId}`,
            );
        },
    );

    WebXPanel.addEventListener(
        WebXPanelEvents.DISCONNECT_CIP,
        ({ detail }: any) => {
            const { reason } = detail;
            console.log(`Disconnected from CIP. Reason: ${reason}`);
        },
    );

    WebXPanel.addEventListener(
        WebXPanelEvents.LICENSE_WS,
        ({ detail }: any) => {
            // const {
            //     resourceAvailable,
            //     controlSystemSupportsLicense,
            //     licenseApplied,
            //     licenseHasExpiry,
            //     licenseDaysRemaining,
            //     trialPeriod,
            //     trialPeriodDaysRemaining,
            // } = detail;

            console.log(detail);
        },
    );

    return { WebXPanel, config };
};

export default useWebXPanel;
