import { time } from "console";

export const debounce = (callback: any, wait: number) => {
    let timeout: any;

    return (...args: any) => {
        const context: any = this;
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            return callback.apply(context, args);
        }, wait);
    }
}