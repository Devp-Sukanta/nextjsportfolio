import { connect } from "@/DB/DBconfig";
import Contact from "@/models/contact.model";
import sendEmail from "@/utils/SendMail";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import path from 'path';
import ejs from 'ejs';

connect();

export async function POST(request) {
    const headersList = await headers();

    if (!headersList) {
        return NextResponse.json(
            { message: "Missing parameter.", data: null, success: false },
            { status: 400 }
        );
    }

    const referrer = headersList.get("referrer");

    if (!referrer) {
        return NextResponse.json(
            {
                message: "Missing or invalid referrer",
                data: null,
                success: false,
            },
            { status: 400 }
        );
    }

    try {
        // ✅ Check if the request body is empty
        const bodyText = await request.text(); // Read body as text first

        if (!bodyText) {
            return NextResponse.json(
                { message: "Empty data couldn't be sent.", data: null, success: false },
                { status: 400 }
            );
        }

        // ✅ Parse the JSON only if bodyText is not empty
        const { name, phone, email, subject, message } = JSON.parse(bodyText);

        if (!name || !phone || !email || !message) {
            return NextResponse.json(
                { message: "All fields are required.", data: null, success: false },
                { status: 400 }
            );
        }

        if (message.length < 10) {
            return NextResponse.json(
                { message: "Please enter at least 10 characters in the message.", data: null, success: false },
                { status: 400 }
            );
        }

        const newContact= await Contact.create({
            name,
            email,
            phone,
            message,
            subject
        });
        const filePath = path.join(process.cwd(), "src/app/mailtemplates/contacttemplate.ejs");
        const html = await ejs.renderFile(filePath, { name });

        await sendEmail({to: email, subject:'Thank You for Contact ME',text:html})

        return NextResponse.json(
            { message: "Thanks for your submission. I'll get back to you within 24 hrs.", data: null, success: true },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { message: "Internal server error", data: null, success: false },
            { status: 500 }
        );
    }
}
