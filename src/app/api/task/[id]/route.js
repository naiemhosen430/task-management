import TaskModel from "@/models/task.model";
import { dbconnect } from "@/utils/mongo";

export async function POST(NextRequest) {
  dbconnect();
  const reqBody = await NextRequest.json();
  const newtask = TaskModel(reqBody);
  await newtask.save({ new: true });

  // response
  return Response.json(
    {
      message: "Successfully added your task.",
    },
    { status: 200 }
  );
}

export async function GET(NextResponse) {
  dbconnect();
  const requestURL = NextResponse.url;
  const splitUrl = requestURL.split("id/");
  const id = splitUrl[1];
  const data = await TaskModel.findOne({ _id: id });

  // response
  return Response.json(
    {
      message: "Successfully added your task.",
      data,
    },
    { status: 200 }
  );
}
