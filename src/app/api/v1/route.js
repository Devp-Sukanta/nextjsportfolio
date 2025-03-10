import { NextResponse } from "next/server";

export async function GET() {

    return NextResponse.json(
        { message: "api running successfully", data: null,success:true },
        { status: 200 }
    );

}