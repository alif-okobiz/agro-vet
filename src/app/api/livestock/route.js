import { NextResponse } from 'next/server';
import { insertDocument, findDocuments } from '@/lib/db-operations';

// The collection name for this specific route
const COLLECTION = 'livestock_tickets';

/**
 * GET: Retrieve all tickets from the database.
 * Results are sorted by 'createdAt' via the lib function.
 */
export async function GET() {
  try {
    const data = await findDocuments(COLLECTION);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("GET_LIVESTOCK_ERROR:", error); // Logs error in server console
    return NextResponse.json(
      { error: "Failed to fetch livestock data" }, 
      { status: 500 }
    );
  }
}

/**
 * POST: Create a new livestock support ticket.
 * Includes basic validation for required fields.
 */
export async function POST(request) {
  try {
    const body = await request.json();
    
    // Basic validation to ensure essential data is present
    const { ownerName, phone, species, category } = body;
    
    if (!ownerName || !phone || !species || !category) {
      return NextResponse.json(
        { error: "Required fields (Name, Phone, Species, Category) are missing" }, 
        { status: 400 }
      );
    }

    const result = await insertDocument(COLLECTION, body);

    return NextResponse.json(
      { 
        message: "Ticket created successfully", 
        id: result.insertedId 
      }, 
      { status: 201 }
    );
  } catch (error) {
    console.error("POST_LIVESTOCK_ERROR:", error); 
    return NextResponse.json(
      { error: "Failed to submit ticket. Please try again later." }, 
      { status: 500 }
    );
  }
}