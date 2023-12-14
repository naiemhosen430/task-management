import TaskModel from "@/models/task.model";
import { dbconnect } from "@/utils/mongo";

export async function POST(NextRequest) {
  dbconnect();

  // we can check user throw the email/id from url
  // const requestURL = NextResponse.url;
  // const splitUrl = requestURL.split("task/");
  // const id/email = splitUrl[1]

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
  const splitUrl = requestURL.split("task/");
  const id = splitUrl[1];
  const data = await TaskModel.findOne({ _id: id });

  // response
  return Response.json(
    {
      message: "Successfull.",
      data,
    },
    { status: 200 }
  );
}

export async function PUT(NextRequest, NextResponse) {
  dbconnect();

  // get info from url
  const requestURL = NextRequest.url;

  const splitUrl = requestURL.split("task/");
  const splitUrl2 = splitUrl[1].split("?email");

  // we can check user trow the email/id here [splitUrl2[1]]

  // get info from request body
  const reqBody = await NextRequest.json();

  const id = splitUrl2[0];

  const data = await TaskModel.updateOne(
    { _id: id },
    {
      $set: reqBody,
    }
  );

  // response
  return Response.json(
    {
      message: "Successfull.",
      data,
    },
    { status: 200 }
  );
}
