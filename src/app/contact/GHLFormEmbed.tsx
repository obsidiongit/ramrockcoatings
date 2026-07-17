"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

const GHL_FORM_ID = "nmABkXsBdwwldU8ZBDm1";
const GHL_FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`;

type MetaWindow = Window & {
  fbq?: (command: "track", event: "Lead") => void;
};

function isFormSubmission(data: unknown) {
  const normalize = (value: string) =>
    value.toUpperCase().replace(/[\s-]+/g, "_");

  if (Array.isArray(data)) {
    return data.some(
      (value) =>
        typeof value === "string" &&
        ["FORM_SUBMITTED", "FORM_SUBMIT"].includes(normalize(value)),
    );
  }

  if (data && typeof data === "object") {
    const message = data as Record<string, unknown>;
    return ["type", "event", "eventName", "message"].some((key) => {
      const value = message[key];
      return (
        typeof value === "string" &&
        ["FORM_SUBMITTED", "FORM_SUBMIT"].includes(normalize(value))
      );
    });
  }

  return false;
}

export function GHLFormEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const leadTracked = useRef(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent<unknown>) => {
      if (
        event.source !== iframeRef.current?.contentWindow ||
        !isFormSubmission(event.data) ||
        leadTracked.current
      ) {
        return;
      }

      leadTracked.current = true;
      (window as MetaWindow).fbq?.("track", "Lead");
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="ghl-form-shell">
      <div className="ghl-form-shell-header">
        <h2 className="font-serif text-2xl text-foreground">Project Details</h2>
        <p className="text-sm text-foreground-muted mt-1">
          Free estimate — no obligation. We&rsquo;ll respond within one business day.
        </p>
      </div>
      <div className="ghl-form-iframe-wrap">
        <iframe
          ref={iframeRef}
          src={GHL_FORM_SRC}
          id={`inline-${GHL_FORM_ID}`}
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Lead Form"
          data-height="916"
          data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
          data-form-id={GHL_FORM_ID}
          title="Request a free epoxy flooring estimate"
          className="ghl-form-iframe"
        />
      </div>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
