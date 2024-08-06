import { describe, it, expect } from 'vitest';
import do_is_email from './email.js';

describe('do_is_email', () => {
    it('有效的邮箱地址测试', () => {
        expect(do_is_email('example@example.com')).toBe(true);
        expect(do_is_email('user.name+tag+sorting@example.com')).toBe(true);
        expect(do_is_email('user.name@example.co.uk')).toBe(true);
    });

    it('无效的邮箱地址测试', () => {
        expect(do_is_email('example@')).toBe(false);
        expect(do_is_email('@example.com')).toBe(false);
        expect(do_is_email('example@example')).toBe(false);
        expect(do_is_email('example@.com')).toBe(false);
        expect(do_is_email('example@com.')).toBe(false);
    });

    it('边界条件测试', () => {
        expect(do_is_email('')).toBe(false);
        expect(do_is_email(null)).toBe(false);
        expect(do_is_email(undefined)).toBe(false);
        expect(do_is_email(123)).toBe(false);
        expect(do_is_email({})).toBe(false);
        expect(do_is_email([])).toBe(false);
    });
});
