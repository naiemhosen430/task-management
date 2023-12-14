import TaskModel from "@/models/task.model";
import { dbconnect } from "@/utils/mongo";

export async function GET(NextResponse) {
  dbconnect();
  const requestURL = NextResponse.url;
  const splitUrl = requestURL.split("mytask/");
  const email = splitUrl[1];

  const data = await TaskModel.find({ email });
  // response
  return Response.json(
    {
      message: "Successfully added your task.",
      data,
    },
    { status: 200 }
  );
}
