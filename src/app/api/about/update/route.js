import connectToDB from "@/database";
import About from "@/models/About"; 
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"
export async function PUT(req) {
    try {
        await connectToDB();
        const extractData = await req.json();
        const { _id, about_me, interest_and_passion, no_of_projects, year_of_experience, no_of_clients, skills } = extractData;
        if (!_id) {
            return NextResponse.json({ success: false, message: "No id provided" });
        }
        const updateFields = {};
        if (about_me !== undefined) updateFields.about_me = about_me;
        if (interest_and_passion !== undefined) {
            if (Array.isArray(interest_and_passion)) {
                updateFields.interest_and_passion = interest_and_passion.map((s) => String(s).trim()).filter(Boolean);
            } else if (typeof interest_and_passion === "string") {
                updateFields.interest_and_passion = interest_and_passion
                    .split("\n")
                    .map((s) => s.trim())
                    .filter(Boolean);
            } else {
                updateFields.interest_and_passion = [];
            }
        }
        if (no_of_projects !== undefined) updateFields.no_of_projects = no_of_projects;
        if (year_of_experience !== undefined) updateFields.year_of_experience = year_of_experience;
        if (no_of_clients !== undefined) updateFields.no_of_clients = no_of_clients;
        if (skills !== undefined) updateFields.skills = skills;

        const updateData = await About.findByIdAndUpdate(_id, updateFields, { new: true });
        if (updateData) {
            return NextResponse.json({
                success: true,
                message: "Updated successfully"
            });
        }else { 
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
