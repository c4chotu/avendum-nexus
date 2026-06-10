import emailjs from "@emailjs/browser";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-\s\d]{7,20}$/;

export const validateEmail = (v: string) => EMAIL_RE.test(v.trim());
export const validatePhone = (v: string) => PHONE_RE.test(v.trim());
export const validateName = (v: string) => v.trim().length >= 2;

export interface EmailPayload {
  from_name: string;
  from_email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export async function sendEmail(payload: EmailPayload): Promise<{ ok: boolean }> {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  if (publicKey && serviceId && templateId) {
    try {
      await emailjs.send(serviceId, templateId, payload as unknown as Record<string, unknown>, { publicKey });
      return { ok: true };
    } catch (err) {
      console.error("EmailJS error:", err);
      throw err;
    }
  }

  // Fallback: simulate a request so the UX still works without keys configured.
  await new Promise((r) => setTimeout(r, 900));
  console.info("[Avendum] EmailJS env not configured — simulated submission:", payload);
  return { ok: true };
}
