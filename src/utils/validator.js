import validator from 'validator';
import isEmpty from 'lodash/isEmpty'

export const validatorInput = function (data) {
    let err = {}
    if (validator.isEmpty(data.telephone)) {
        err.telephone = "手机号码不能为空"
    }
    if (validator.isEmpty(data.verification)) {
        err.verification = "验证码不能为空"
    }
    return {
        isValid: !isEmpty(err),
        err
    }
}