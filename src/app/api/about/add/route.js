import connectToDB from "@/database";
import About from "@/models/About"; 
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"
export async function POST(req) {
    try {
        await connectToDB();
        const extractData = await req.json();
        if (extractData && "interest_and_passion" in extractData) {
            const v = extractData.interest_and_passion;
            if (Array.isArray(v)) {
                extractData.interest_and_passion = v.map((s) => String(s).trim()).filter(Boolean);
            } else if (typeof v === "string") {
                extractData.interest_and_passion = v
                    .split("\n")
                    .map((s) => s.trim())
                    .filter(Boolean);
            }
        }
        const existing = await About.findOne({}).sort({ updatedAt: -1, createdAt: -1 });
        const saved = existing
          ? await About.findByIdAndUpdate(existing._id, extractData, { new: true })
          : await About.create(extractData);
        if (saved) {
            return NextResponse.json({
                success: true,
                message: "Data saved successfully"
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "Something goes wrong Please try again"
            });
        } 
    } catch (e) {
        console.log(e);
        
        return NextResponse.json({
            success: false,
            message: "Something goes wrong Please try again"
        }, { status: 500 });
    }
}
