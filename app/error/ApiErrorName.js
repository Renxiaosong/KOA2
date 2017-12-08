/**
 * API错误名称
 */
var ApiErrorNames = {};

ApiErrorNames.UNKNOW_ERROR = "unknowError";
ApiErrorNames.USER_NOT_EXIST = "userNotExist";
ApiErrorNames.PARAMS_ERROR = "paramsError";
ApiErrorNames.NO_PATCH = "noPatchError";
ApiErrorNames.SESSION_ERR = "sessionError";

/**
 * API错误名称对应的错误信息
 */
const error_map = new Map();

error_map.set(ApiErrorNames.UNKNOW_ERROR, { code: -1, message: '未知错误' });
error_map.set(ApiErrorNames.USER_NOT_EXIST, { code: 101, message: '用户不存在' });
error_map.set(ApiErrorNames.PARAMS_ERROR, { code: 300, message: '参数缺失' });
error_map.set(ApiErrorNames.NO_PATCH, { code: 400, message: '匹配失败' });
error_map.set(ApiErrorNames.SESSION_ERR, { code: 403, message: 'sessionError' });

//根据错误名称获取错误信息
ApiErrorNames.getErrorInfo = (error_name) => {

    var error_info;

    if (error_name) {
        error_info = error_map.get(error_name);
    }

    //如果没有对应的错误信息，默认'未知错误'
    if (!error_info) {
        error_name = ApiErrorNames.UNKNOW_ERROR;
        error_info = error_map.get(error_name);
    }

    return error_info;
}

module.exports = ApiErrorNames;