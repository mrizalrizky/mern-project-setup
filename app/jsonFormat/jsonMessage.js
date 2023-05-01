const jsonFailed = (errCode, errorMsg) => {
    return {
        "error_code": errCode,
        "error_message": errMsg
    }
}

module.exports = {
    jsonFailed,
}