const { Schema, Types } = require("mongoose");
const moment = require("moment");

const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timeStamp) => moment(timeStamp).format('MMM DD, YYYY [at] hh:mm a')
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;