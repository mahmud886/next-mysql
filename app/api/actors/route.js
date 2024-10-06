import {NextResponse} from "next/server";
import {createConnection} from "@/db";

export async function GET() {
  try{
    const db = await createConnection();
    const query = `SELECT * FROM sakila.actor`
    const [actor] = await db.query(query);
    return NextResponse.json(actor);

  }catch (error) {
    console.log('Error fetching data:', error);
    return NextResponse.json({error: error.message});
  }
}