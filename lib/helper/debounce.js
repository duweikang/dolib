/**
 * 防抖动函数
 * @author 杜同学 <https://github.com/duweikang>
 * @category 帮助
 * @alias do_helper_debounce
 * @param {Function} fn 要防抖动的函数
 * @param {number} [delay=1000] 延迟时间，默认1000毫秒
 * @param {boolean} [firstExecute=false] 是否立即执行，默认否
 * @returns {Function} 包装后的防抖动函数
 * @example
 * 定义需要防抖动的函数
 * const logMessage = (message) => {
 *     console.log(message);
 * };
 *
 * 创建防抖动函数，设置延迟时间为1000毫秒，并在首次调用时立即执行
 * const debouncedLogMessage = debounce(logMessage, 1000, true);
 *
 * 使用防抖动函数
 * debouncedLogMessage('Hello, World!'); // 立即执行，输出 "Hello, World!"
 * debouncedLogMessage('This will be ignored'); // 被防抖动，延迟1000毫秒后不会执行
 *
 * 再次调用，输出将会在1000毫秒后显示
 * setTimeout(() => {
 *     debouncedLogMessage('This will be logged after 1 second delay');
 * }, 500);
 *
 * 如果你希望不在首次调用时立即执行，可以将 third parameter 设为 false
 * const debouncedLogMessageNoImmediate = debounce(logMessage, 1000, false);
 * debouncedLogMessageNoImmediate('This will be delayed'); // 输出将在1000毫秒后显示
 */

export default (fn, delay = 1000, firstExecute = false) => {
    let timer = null;
    let isInitialCall = true;

    return function (...args) {
        const context = this;

        if (firstExecute && isInitialCall) {
            fn.apply(context, args);
            isInitialCall = false;
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
};
