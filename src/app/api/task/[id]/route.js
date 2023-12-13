import TaskModel from "@/models/task.model";
import { dbconnect } from "@/utils/mongo";

export async function POST(NextRequest) {
  dbconnect();
  const reqBody = await NextRequest.json();
  const newtask = TaskModel(reqBody);
  await newtask.save();

  // response
  return Response.json(
    {
      message: "Successfully added your task.",
    },
    { status: 200 }
  );
}
