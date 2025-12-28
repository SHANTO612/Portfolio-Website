import connectToDB from "@/database";
import Project from "@/models/Project";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const { _id, name, featured, website, technologies, github, links } = extractData;
    const updateData = await Project.findByIdAndUpdate(
      { _id: _id },
      { name, featured, website, technologies, github, links },
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
