import { describe, it, expect } from 'vitest';
import do_string_uniqueId from './uniqueId.js'; // 确保路径正确

describe('do_string_uniqueId', () => {
    it('生成的唯一ID应该是一个字符串', () => {
        const id = do_string_uniqueId();
        expect(typeof id).toBe('string');
    });

    it('生成的唯一ID应该符合UUID v4格式', () => {
        const id = do_string_uniqueId();
        const uuidV4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
        expect(uuidV4Regex.test(id)).toBe(true);
    });

    it('多次调用生成的唯一ID应该不同', () => {
        const id1 = do_string_uniqueId();
        const id2 = do_string_uniqueId();
        expect(id1).not.toBe(id2);
    });

    it('生成的唯一ID的长度应该是36个字符', () => {
        const id = do_string_uniqueId();
        expect(id.length).toBe(36);
    });
});
