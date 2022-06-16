export * from "./core/ArrayUtil";
export * from "./core/DateUtil";
export * from "./core/DistributionGenerator";
export * from "./core/EnumUtil";
export * from "./core/ErrorUtil";
export * from "./core/HashUtil";
export * from "./core/IDGenerator";
export * from "./core/NumberUtil";
export * from "./core/ObjectUtil";
export * from "./core/PromiseUtil";
export * from "./core/RandomUtil";
export * from "./core/TextUtil";
export * from "./core/URLUtil";
export * from "./core/VersionComparator";
export * from "./decorator/Memo";
export * from "./decorator/Throttle";
export * from "./decorator/type";
export * from "./type";

/* eslint-disable @typescript-eslint/consistent-type-imports -- typesafe */
export let ReactUtil: typeof import("./core/ReactUtil").ReactUtil;
export let useAPI: typeof import("./hooks/useAPI").useAPI;
export let useBool: typeof import("./hooks/useBool").useBool;
export let useDidMountEffect: typeof import("./hooks/useDidMountEffect").useDidMountEffect;
export let useForceUpdate: typeof import("./hooks/useForceUpdate").useForceUpdate;
export let usePrevious: typeof import("./hooks/usePrevious").usePrevious;
export let useWhyDidYouUpdate: typeof import("./hooks/useWhyDidYouUpdate").useWhyDidYouUpdate;
export let useWillUnmountEffect: typeof import("./hooks/useWillUnmountEffect").useWillUnmountEffect;
export let BrowserUtil: typeof import("./web/BrowserUtil").BrowserUtil;
export let ClipboardUtil: typeof import("./web/ClipboardUtil").ClipboardUtil;
export let LocalStorageUtil: typeof import("./web/LocalStorageUtil").LocalStorageUtil;
export let SessionStorageUtil: typeof import("./web/SessionStorageUtil").SessionStorageUtil;

/* eslint-enable @typescript-eslint/consistent-type-imports */

// Only if window is defined || is browser environment
if (typeof window !== "undefined") {
    BrowserUtil = require("./web/BrowserUtil");
    ClipboardUtil = require("./web/ClipboardUtil");
    LocalStorageUtil = require("./web/LocalStorageUtil");
    SessionStorageUtil = require("./web/SessionStorageUtil");
} else {
    BrowserUtil = null as any;
    ClipboardUtil = null as any;
    LocalStorageUtil = null as any;
    SessionStorageUtil = null as any;
}

try {
    // Only if react can be resolved.
    if (require.resolve("react")) {
        ReactUtil = require("./core/ReactUtil");
        useAPI = require("./hooks/useAPI");
        useBool = require("./hooks/useBool");
        useDidMountEffect = require("./hooks/useDidMountEffect");
        useForceUpdate = require("./hooks/useForceUpdate");
        usePrevious = require("./hooks/usePrevious");
        useWhyDidYouUpdate = require("./hooks/useWhyDidYouUpdate");
        useWillUnmountEffect = require("./hooks/useWillUnmountEffect");
    }
} catch (error) {
    ReactUtil = null as any;
    useAPI = null as any;
    useBool = null as any;
    useDidMountEffect = null as any;
    useForceUpdate = null as any;
    usePrevious = null as any;
    useWhyDidYouUpdate = null as any;
    useWillUnmountEffect = null as any;
}
