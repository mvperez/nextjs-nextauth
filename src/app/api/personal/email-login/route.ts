import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    if (request.body === null) {
        // Handle the case when request.body is null
        // For example, return an appropriate response or throw an error
    } else {
        const payload_byte = (await request.body.getReader().read()).value;
        const decoder = new TextDecoder();
        const payload_str = decoder.decode(payload_byte);
        // Continue with the rest of your logic
    }
}
