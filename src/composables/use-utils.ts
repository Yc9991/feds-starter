

export const useUtils = () => {

    const overrideRefTemplate = <T extends object, K extends keyof T>(
        store: T,
        key: K,
        replace: T[K]
    ) => {
        store[key] = replace;
    };

    return {
        overrideRefTemplate,
    }

}