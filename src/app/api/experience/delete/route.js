import connectToDB from "@/database";
import Experience from "@/models/Experience";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export const dynamic = "force-dynamic";
export async function DELETE(req) {
  try {
    await connectToDB();
    const { id } = await req.json();
    if (!mongoose.isValidObjectId(id)) return NextResponse.json({ success: false, message: "Invalid Id" });
    const deleted = await Experience.findByIdAndDelete(id);
    if (deleted) return NextResponse.json({ success: true, message: "Deleted" });
    return NextResponse.json({ success: false, message: "Not found" });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false, message: "Error" });
  }
}
