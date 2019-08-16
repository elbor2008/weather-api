module.exports = (code, message, data, res) => {
  res.status(code).json({
    status: code === 200 ? 'success' : 'error',
    message,
    data
  });
};
