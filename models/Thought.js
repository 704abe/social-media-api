const { Schema, Types, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const moment = require("moment");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "You need to leave a thought!",
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timeStamp) => moment(timeStamp).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;