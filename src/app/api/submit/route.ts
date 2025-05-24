import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log("➡️ API route was called");

  try {
    const data = await req.json();
    console.log("📥 Received data from frontend:", data);

    const webhookUrl = "https://astrodog3.app.n8n.cloud/webhook/dynasty8";

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.text();
    console.log("✅ Response from n8n:", result);

    return NextResponse.json({ success: true, n8nResponse: result });
  } catch (error) {
    console.error("❌ Error in API route:", error);
    return NextResponse.json({ success: false, error: 'Failed to send data to n8n' }, { status: 500 });
  }
}
