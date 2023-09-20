import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String, // Use String constructor function instead of "String"
      required: true,
    },
    author: {
      type: String, // Use String constructor function instead of "String"
      required: true,
    },
    publishYear: {
      type: String, // Use String constructor function instead of "String"
      required: true,
    },
  },
  {
    timestamps: true, // Use "timestamps" instead of "timestamp"
  }
);

export const Book = mongoose.model("Book", bookSchema); // Use "Book" instead of "Cat" as the model name
