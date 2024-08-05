/**
 * 生成唯一ID
 * @author 杜同学 <https://github.com/duweikang>
 * @alias do_string_uniqueId
 * @category 字符串
 * @returns {String} 返回生成的唯一ID
 */
export const uniqueId = () => {
    // 使用 UUID v4 的格式生成唯一 ID
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
        const randomNum = (Math.random() * 16) | 0; // 生成 0 到 15 之间的随机数
        const value = char === 'x' ? randomNum : (randomNum & 0x3) | 0x8; // 如果是 'x'，则直接使用随机数，否则使用 (randomNum & 0x3 | 0x8)
        return value.toString(16); // 将生成的数字转换为十六进制字符串
    });
};
