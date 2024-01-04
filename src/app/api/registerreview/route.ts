import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
    // const { Description, title } = CreateNewTaskSchema.parse(req.body);
     
     const json = await req.json();
      const newReview = await prisma.rating.create({
         data: json
        
      }
      
      )
 
      let json_response = {
         status: "success",
         data: {
            newReview,
         },
       };
       return new NextResponse(JSON.stringify(json_response), {
         status: 201,
         headers: { "Content-Type": "application/json" },
       });
     }