import { NextResponse } from "next/server";
import connect from "../../../../lib/db";
import User from "../../../../lib/models/user";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async () => {
  try {
    await connect();

    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse("Error Comes Fetching User data", error, {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    await connect();

    const newUser = new User(body);
    await newUser.save();

    return new NextResponse(
      { message: "save Users success fully ", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(
      { message: "Error save User data", error: error },
      {
        status: 500,
      }
    );
  }
};

export const PATCH = async (request) => {
  try {
    const body = await request.json();
    const { userId, newUserName } = body;

    await connect();

    if (!userId || !newUserName) {
      return new NextResponse(
        JSON.stringify({ message: "user ID or new user Name required" }),
        { status: 400 }
      );
    }

    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        JSON.stringify({ message: "user ID is unCorrect" }),
        { status: 400 }
      );
    }

    const updateUser = await User.findOneAndUpdate(
      { _id: new ObjectId(userId) },
      { username: newUserName },
      { new: true }
    );

    if (!updateUser) {
      return new NextResponse(
        JSON.stringify({ message: "user not find or problem by update" }),
        { status: 400 }
      );
    }

    // return success response
    return new NextResponse(
      JSON.stringify({ message: "user update successfully", user: updateUser }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      { message: "Error Update User data", error: error },
      {
        status: 500,
      }
    );
  }
};
