const axios = require("axios");
const { JOB_LIST_API, JOB_DETAIL_API } = process.env;

const getAll = async (req, res, next) => {
  try {
    const queryString = req.originalUrl.split("?")[1];
    const url = `${JOB_LIST_API}${queryString ? `?${queryString}` : ""}`;
    const jobList = await axios.get(url);
    res.status(200).json({ code: 200, message: "success", data: jobList.data });
  } catch (err) {
    next(err);
  }
};

const getDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const jobDetail = await axios.get(JOB_DETAIL_API + `/${id}`);
    res.status(200).json({ code: 200, message: 'success', data: jobDetail.data})
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getDetail,
};
