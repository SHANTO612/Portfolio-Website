import connectToDB from "@/database";
import Certification from "@/models/Certification";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(req) {
  try {
    await connectToDB();
    const extractData = await Certification.find({});
    if (extractData) {
      return NextResponse.json({ success: true, data: extractData });
    }
    return NextResponse.json({ success: false, message: "Something goes wrong Please try again" });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false, message: "Something goes wrong Please try again" });
  }
}
