const { Schema, model } = require("mongoose");

const Book = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    published_year: {
      type: Number,
      required: true,
    },
    image_url: {
      type: String,
      required: false,
    },
    discription: {
      type: String,
      required: false,
    },
    genre: {
      type: String,
      required: false,
    },
    period: {
      type: String,
      required: false,
    },
    published_home: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BookSchema = model("Book", Book);

module.exports = BookSchema;
