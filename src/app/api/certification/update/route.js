import connectToDB from "@/database";
import Certification from "@/models/Certification";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function PUT(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    if (!extractData._id) {
      return NextResponse.json({ success: false, message: "No id provided" });
    }
    const updated = await Certification.findByIdAndUpdate(extractData._id, extractData, { new: true });
    if (updated) {
      return NextResponse.json({ success: true, message: "Data updated successfully" });
    }
    return NextResponse.json({ success: false, message: "Update failed" });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false, message: "Something goes wrong Please try again" });
  }
}
