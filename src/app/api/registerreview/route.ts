import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
    // const { Description, title } = CreateNewTaskSchema.parse(req.body);
     
     const res = await req.json();
      const newReview = await prisma.rating.create({
         data: res
        
      }
      
      )
      const data = await res.json()
 
      return Response.json(data)
     }