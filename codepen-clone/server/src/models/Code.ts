import mongoose, { Schema, Document } from "mongoose";

interface ICode extends Document {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
}

const CodeSchema: Schema = new Schema({
  fullCode: {
    html: { type: String, required: true },
    css: { type: String, required: true },
    javascript: { type: String, required: true },
  },
});

export const Code = mongoose.model<ICode>("Code", CodeSchema);
