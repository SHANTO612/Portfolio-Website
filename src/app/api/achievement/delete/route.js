import connectToDB from "@/database";
import Achievement from "@/models/Achievement";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function DELETE(req) {
  try {
    await connectToDB();
    const { id } = await req.json();
    if (!id) return NextResponse.json({ success: false, message: "No id provided" });
    const deleted = await Achievement.findByIdAndDelete(id);
    if (deleted) return NextResponse.json({ success: true, message: "Deleted" });
    return NextResponse.json({ success: false, message: "Delete failed" });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false, message: "Something goes wrong Please try again" });
  }
}
