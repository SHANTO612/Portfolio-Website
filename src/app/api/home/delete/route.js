import connectToDB from "@/database";
import Home from "@/models/Home";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
export const dynamic = "force-dynamic";
export async function DELETE(req) {
  try {
    await connectToDB();
    const { id } = await req.json();
    if (!ObjectId.isValid(id)) return NextResponse.json({ success: false, message: "Invalid Id" });
    const deleted = await Home.findByIdAndDelete(id);
    if (deleted) return NextResponse.json({ success: true, message: "Deleted" });
    return NextResponse.json({ success: false, message: "Not found" });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false, message: "Error" });
  }
}
