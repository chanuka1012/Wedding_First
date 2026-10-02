import { useState } from "react";
import SectionWrapper from "../layout/SectionWrapper.jsx";
import Button from "../common/Button.jsx";
import { telLink, whatsappLink, shareInvitation } from "../../utils/helpers.js";

export default function ContactSection({ data }) {
  const { contacts: c, couple } = data;
  const [copied, setCopied] = useState(false);

  const rsvpText = `Hello! I would like to confirm my attendance at the wedding of ${couple.displayName}.`;

  async function handleShare() {
    const result = await shareInvitation(couple.displayName);
    setCopied(result === "copied");
  }

  return (
    <SectionWrapper id="contact" title="Contact Us">
      <p className="mb-8">Please let us know if you can join us.</p>

      <Button href={whatsappLink(c.brideWhatsapp, rsvpText)} target="_blank" rel="noopener noreferrer">
        Confirm via WhatsApp
      </Button>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button variant="outline" href={telLink(c.bridePhone)}>Call {couple.bride}</Button>
        <Button variant="outline" href={telLink(c.groomPhone)}>Call {couple.groom}</Button>
      </div>

      <button onClick={handleShare} className="mt-10 min-h-11 underline">
        {copied ? "Link copied ✓" : "Share this invitation"}
      </button>
    </SectionWrapper>
  );
}