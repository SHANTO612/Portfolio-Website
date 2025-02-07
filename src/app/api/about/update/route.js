import connectToDB from "@/database";
import About from "@/models/About"; 
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"
export async function PUT(req) {
    try {
        await connectToDB();
        const extractData = await req.json();
        const { _id,about_me,no_of_projects,year_of_experience,no_of_clients,skills } = extractData;
        const updateData = await About.findByIdAndUpdate(
            {
                _id: _id
            },
            {about_me,no_of_projects,year_of_experience,no_of_clients,skills},
            {new: true}
        );
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
        });
    }
}