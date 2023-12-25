const express = require("express");
const getsectors = express.Router();
const sectors = require("../connections/sectors");

getsectors.get("/", async (req, res) => {
  const getAllSectors = await sectors();
  const response = getAllSectors.find().toArray();

  const responseLength = (await response).length;
  if (responseLength === 0) {
    return res.status(404).send({
      message: "No sectors found",
    });
  }

  response.then((data) => {
    res.status(200).send(JSON.stringify(data));
  });
});

module.exports = getsectors;
