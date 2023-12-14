import TaskModel from "@/models/task.model";
import { dbconnect } from "@/utils/mongo";

export async function GET() {
  dbconnect();
  const data = await TaskModel.find().limit(20);
  // response
  return Response.json(
    {
      message: "Successfully added your task.",
      data,
    },
    { status: 200 }
  );
}
