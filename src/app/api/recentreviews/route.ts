import { prisma } from "@/lib/prisma"


export async function GET(req: Request, res: Response){
    const ratings = await prisma.rating.findMany()

   
    return Response.json( ratings )
  }