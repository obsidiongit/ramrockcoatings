import { NextRequest, NextResponse } from "next/server";

// ─── CRM webhook endpoint ─────────────────────────────────────────────────────
// Replace WEBHOOK_URL with your GoHighLevel or HubSpot webhook URL.
// For GoHighLevel: Settings → Integrations → Webhooks → Create Webhook
// For HubSpot: Forms → Create Form → set form submissions endpoint

const WEBHOOK_URL = process.env.CRM_WEBHOOK_URL ?? "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, phone, email, service, message } = body;

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    // If no webhook configured, log and return success (dev mode)
    if (!WEBHOOK_URL) {
      console.log("[Contact form] No CRM_WEBHOOK_URL set. Form data:", body);
      return NextResponse.json({ success: true });
    }

    // Forward to CRM webhook
    const crmRes = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: name.split(" ")[0] ?? name,
        lastName: name.split(" ").slice(1).join(" ") ?? "",
        phone,
        email,
        source: "Website Contact Form",
        service,
        message,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!crmRes.ok) {
      console.error("[Contact form] CRM webhook error:", crmRes.status);
      throw new Error("CRM webhook failed");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact form] Error:", err);
    return NextResponse.json(
      { error: "Submission failed. Please try again." },
      { status: 500 }
    );
  }
}
