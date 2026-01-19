import connectToDB from "@/database"; 
import User from "@/models/User";
import { compare } from "bcryptjs";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"
export async function POST(req) {
    try {
        await connectToDB();
        const { username, password } = await req.json();
        if (!username || !password) {
            return NextResponse.json(
                { success: false, message: "Username and password are required" },
                { status: 400 }
            );
        }
        const checkUser = await User.findOne({username});
        if (!checkUser) {
            return NextResponse.json({
                success: false,
                message: "User name is not present Please try again"
            }, { status: 401 });
        } 
        const storedPassword = checkUser.password || "";
        const isBcryptHash = typeof storedPassword === "string" && storedPassword.startsWith("$2");
        const checkPassword = isBcryptHash ? await compare(password, storedPassword) : password === storedPassword;
        if (!checkPassword) {
            return NextResponse.json({
                success: false,
                message: "Wrong Password. Please try again"
            }, { status: 401 });
        }
        return NextResponse.json({
            success: true,
            message: "Login Successful"
        }, { status: 200 })
    } catch (e) {
        console.log(e); 
        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
