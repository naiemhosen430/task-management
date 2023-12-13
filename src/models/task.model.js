import { model, Schema } from "mongoose";

const taskSchema = Schema(
  {
    tittle: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    ownername: {
      type: String,
      required: true,
    },
    react: {
      type: Array,
      default: [],
    },
    comment: {
      type: Array,
      default: [],
    },
    perticipate: {
      type: Array,
      default: [],
    },
    answer: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const TaskModel = model("task", taskSchema);
export default TaskModel;
