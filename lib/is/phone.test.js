import { describe, it, expect } from 'vitest';

import do_is_phone from './phone.js';

describe('do_is_phone', () => {
    it('有效手机号测试', () => {
        expect(do_is_phone('18888888888')).toBe(true);
        expect(do_is_phone(18888888888)).toBe(true); // 数字类型
    });

    it('无效手机号测试', () => {
        expect(do_is_phone('1888888888')).toBe(false); // 少一位
        expect(do_is_phone('28888888888')).toBe(false); // 以2开头
        expect(do_is_phone('188888888888')).toBe(false); // 多一位
        expect(do_is_phone('188888888a8')).toBe(false); // 含有字母
    });

    it('边界条件测试', () => {
        expect(do_is_phone('')).toBe(false); // 空字符串
        expect(do_is_phone(' ')).toBe(false); // 空格
        expect(do_is_phone('188 8888 8888')).toBe(false); // 含有空格
        expect(do_is_phone('+8613888888888')).toBe(false); // 国际区号
    });

    it('非字符串测试', () => {
        expect(do_is_phone(null)).toBe(false);
        expect(do_is_phone(undefined)).toBe(false);
        expect(do_is_phone({})).toBe(false); // 对象
        expect(do_is_phone([])).toBe(false); // 数组
    });
});
