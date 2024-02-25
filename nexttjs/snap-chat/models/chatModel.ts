import mongoose, { Document, Model, Types } from "mongoose";

export interface IChat {
  participants: Types.ObjectId[];
  messages: Types.ObjectId[];
}

export interface IChatDocument extends IChat, Document {
  createdAt: Date;
  updatedAt: Date;
}

const chatSchema = new mongoose.Schema<IChatDocument>(
  {
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "message",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Chat: Model<IChatDocument> =
  mongoose.models?.chat || mongoose.model("chat", chatSchema);

export default Chat;
