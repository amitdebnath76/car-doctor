import { carsSchema } from "@/app/lib/carsModel";
import { connectionStr } from "@/app/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr)
    const data = await carsSchema.find()
    console.log(data)
    return NextResponse.json({result:true})
}

export async function POST(request){
    let payload = await request.json();
    await mongoose.connect(connectionStr);
    let users = new carsSchema(payload);
    const result = users.save();
    return NextResponse.json({result,success:true})
}