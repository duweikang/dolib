/**
 * 判断是否是手机号
 * @alias do_is_phone
 * @category is
 * @param {any} value 任意值
 * @returns {boolean} 返回是否是手机号
 * @author 杜同学 <https://github.com/duweikang>
 * @example
 * do_is_phone('18888888888') // true
 * do_is_phone('1888888888') // false
 */
export default (value) => {
    if (typeof value === 'number') {
        value = String(value); // 将数字转换为字符串
    }
    if (typeof value !== 'string') {
        return false;
    }
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(value);
};
