const { Schema, model } = require("mongoose");

const Author = new Schema({
  full_name: {
    type: String,
    required: true,
    unique: true,
  },
  birt_year: {
    type: Number,
    required: true,
  },
  death_year: {
    type: String,
    required: false,
    default: null,
  },
  image_url: {
    type: String,
    required: false,
  },
  bio: {
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
  creativity: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
  versionKey: false
});

const AuthorSchema = model("Author", Author);

module.exports = AuthorSchema;
