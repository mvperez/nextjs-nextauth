import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const token = request.nextUrl.searchParams.get('token')
    const confirm_email = process.env.EXTERNAL_API_BASE_URL + '/v1/entity/confirm-email?token=' + token;
    const response = await fetch(confirm_email, {
        method: 'GET',
    });
    if (response.status == 200) {
        return NextResponse.redirect(
            new URL('/', request.url)
        )
    }
}