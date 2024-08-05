/**
 * 判断是否是手机号
 * @author 杜同学 <https://github.com/duweikang>
 * @category 判断
 * @alias do_is_email
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是邮箱地址
 */
export const email = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
};
