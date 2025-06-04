import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import base64url from "base64url";
import { sendEmail } from "@/components/mailers/mailer";
import { verifyEmailTemplate } from "@/components/mailers/templates/templates";
//import { Resend } from "resend";
//import EmailTemplate from "@/components/email-template";

export async function POST(request) {
  try {
    // const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, password, role } = await request.json();

    //check if user exist
    const userExists = await db.user.findUnique({
      where: { email },
    });
    if (userExists) {
      return NextResponse.json(
        {
          data: null,
          message: "User already exists",
        },
        { status: 409 }
      );
    }

    //encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    //generate uuid
    const rawToken = uuidv4();
    const token = base64url.encode(rawToken);

    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        verificationToken: token,
      },
    });
    console.log("NEW USER", newUser);
    //send email if user role === farmer
    if (role === "FARMER") {
      const userId = newUser.id;
      // const linkText = "Verify Account";
      const redirectUrl = `onboarding/${userId}?token=${token}`;

      // const sendMail = await resend.emails.send({
      //   from: "GEM-TUNDE<you@onboarding.resend.dev>",
      //   to: email,
      //   subject: "Account Verification From Multi-Ecommerce",
      //   react: EmailTemplate({ name, redirectUrl, linkText }),
      // });
      await sendEmail({
        to: newUser.email,
        ...verifyEmailTemplate(redirectUrl),
      });
      //console.log("sendmail", sendMail);
    }
    return NextResponse.json(
      {
        data: newUser,
        message: "user created successfully",
        ok: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to create a user",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("users", users);
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch users",
        error,
      },
      { status: 500 }
    );
  }
}
