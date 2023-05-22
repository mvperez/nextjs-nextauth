import { useRouter } from 'next/router';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    if (request.body === null) {
        // Handle the case when request.body is null
        // For example, return an appropriate response or throw an error
    }
    else {
        const payload_byte = (await request.body.getReader().read()).value;
        const decoder = new TextDecoder();
        const payload_str = decoder.decode(payload_byte);
        // Parse the payload_str into a JavaScript object
        const payload_obj = JSON.parse(payload_str);
        // Add the email property to the object
        payload_obj.confirm_email = process.env.CONFIRM_EMAIL_URL; //'http://localhost:3000/api/personal/confirm-email';
        // Convert the modified object back to a JSON string
        const updated_payload_str = JSON.stringify(payload_obj);
        const response = await fetch(process.env.EXTERNAL_API_BASE_URL + '/v1/entity/individual', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: updated_payload_str,
        });
        if (response.body === null) {

        }
        else {
            const resp_body = decoder.decode((await response.body.getReader().read()).value);
            return NextResponse.json(response.ok);
        }
    }
}

export async function GET(request: NextRequest, params: { entity_id: string }) {
    const entity_id = params.entity_id;
}