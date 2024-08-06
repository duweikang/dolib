import { describe, it, expect, vi } from 'vitest';
import debounce from './debounce.js';

describe('debounce', () => {
    it('应该是一个函数', () => {
        expect(typeof debounce).toBe('function');
    });

    it('应该延迟执行函数', () => {
        const fn = vi.fn();
        const debouncedFn = debounce(fn, 1000);

        debouncedFn();
        expect(fn).not.toHaveBeenCalled();

        setTimeout(() => {
            expect(fn).toHaveBeenCalled();
        }, 1000);
    });

    it('在延迟时间内多次调用只执行一次', () => {
        const fn = vi.fn();
        const debouncedFn = debounce(fn, 1000);

        debouncedFn();
        debouncedFn();
        debouncedFn();

        expect(fn).not.toHaveBeenCalled();

        setTimeout(() => {
            expect(fn).toHaveBeenCalledTimes(1);
        }, 1000);
    });

    it('如果 firstExecute 为 true，首次调用应立即执行', () => {
        const fn = vi.fn();
        const debouncedFn = debounce(fn, 1000, true);

        debouncedFn();
        expect(fn).toHaveBeenCalledTimes(1);

        setTimeout(() => {
            expect(fn).toHaveBeenCalledTimes(1);
        }, 500);

        setTimeout(() => {
            debouncedFn();
            expect(fn).toHaveBeenCalledTimes(2);
        }, 1500);
    });

    it('在延迟时间内多次调用时重新计时', () => {
        const fn = vi.fn();
        const debouncedFn = debounce(fn, 1000);

        debouncedFn();
        setTimeout(debouncedFn, 500); // 在500毫秒后再次调用

        setTimeout(() => {
            expect(fn).not.toHaveBeenCalled();
        }, 1000); // 在首次调用后的1000毫秒时检查

        setTimeout(() => {
            expect(fn).toHaveBeenCalledTimes(1);
        }, 1500); // 在最后一次调用后的1000毫秒时检查
    });
});
