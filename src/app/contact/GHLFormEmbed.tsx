"use client";

import Script from "next/script";

const GHL_FORM_ID = "nmABkXsBdwwldU8ZBDm1";
const GHL_FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`;

export function GHLFormEmbed() {
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
