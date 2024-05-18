/**
 * For void functions:
 *
 * Limit the call frequency to max 1 time during @millisecond。
 */
export function Throttle<This, Fn extends (...args: any[]) => void>(millisecond: number) {
    let lastTime = 0;
    // Keeping the context to preserve type inference
    return (fn: Fn, _context: ClassMethodDecoratorContext<This, Fn>) => {
        return function (this: This, ...args: any[]) {
            const currentTime = Date.now();
            if (currentTime > lastTime + millisecond) {
                fn.apply(this, args);
                lastTime = currentTime;
            }
        };
    };
}
