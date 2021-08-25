// @desc Get all transactions
// @route GET api/v1/transactions

exports.getTransactions = (req, res, next) => {
    res.send("GET Transaction")
}
exports.addTransactions = (req, res, next) => {
    res.send("POST Transaction")
}
exports.deleteTransactions = (req, res, next) => {
    res.send("DELETE Transaction")
}

