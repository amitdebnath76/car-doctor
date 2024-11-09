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