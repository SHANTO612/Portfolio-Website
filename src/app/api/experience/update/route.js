import connectToDB from "@/database";
import Experience from "@/models/Experience";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const { _id, title, year, affiliation, details } = extractData;
    const updateData = await Experience.findByIdAndUpdate(
      { _id: _id },
      { title, year, affiliation, details },
      { new: true }
    );
    if (updateData) {
      return NextResponse.json({ success: true, message: "Updated successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Something goes wrong Please try again" });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false, message: "Something goes wrong Please try again" });
  }
}
