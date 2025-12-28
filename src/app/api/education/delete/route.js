import connectToDB from "@/database"; 
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Education from "@/models/Education";
export const dynamic = "force-dynamic"
export async function DELETE(req) {
    try {
        console.log('Delete request received')
        await connectToDB()
        const { id } = await req.json();
        if (!mongoose.isValidObjectId(id)) {
            return NextResponse.json({
                success: false,
                message: "Invalid Id provided"
            }) 
        }
        const deleted = await Education.findByIdAndDelete(id);
        if (deleted) {
            return NextResponse.json({
                success: true,
                message: "Education deleted successfully"
            }) 
        } else {
            return NextResponse.json({
                success: false,
                message: "Education not found or already deleted"
            }) 
        }
 
    } catch (e) {
        console.log(e);
    }
}
