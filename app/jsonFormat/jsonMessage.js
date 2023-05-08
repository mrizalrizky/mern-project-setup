const jsonFailed = (errCode, errorMsg) => {
    return {
        "error_code": errCode,
        "error_message": errorMsg
    }
}

module.exports = {
    jsonFailed,
}