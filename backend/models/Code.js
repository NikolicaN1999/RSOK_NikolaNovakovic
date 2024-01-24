const mongoose = require("mongoose");

//tip podataka za identifikaciju jedinstvenih objekata u MongoDB bazi
const { ObjectId } = mongoose.Schema;

const codeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Code", codeSchema);
