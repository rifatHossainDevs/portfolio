export interface ContactData { name: string; email: string; subject: string; message: string }
export type Errors = Partial<Record<keyof ContactData, string>>

export function validate(d: ContactData): Errors {
  const e: Errors = {}
  if (d.name.trim().length < 2) e.name = 'Enter your name (at least 2 characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Enter a valid email address.'
  if (d.subject.trim().length < 3) e.subject = 'Enter a subject (at least 3 characters).'
  if (d.message.trim().length < 10) e.message = 'Write a message of at least 10 characters.'
  return e
}

/**
 * EMAIL DELIVERY (free, no server needed): https://web3forms.com
 * 1) Enter your email there -> they email you an "Access Key".
 * 2) Paste it below. Messages from the form then arrive in your inbox.
 * The key is public by design (it can only send mail TO your address).
 */
export const WEB3FORMS_KEY: string = '8aad7687-4220-44f4-bbeb-70fe0016fdad'

const configured = () => WEB3FORMS_KEY.trim() !== '' && !WEB3FORMS_KEY.includes('YOUR_ACCESS_KEY')

export async function sendMessage(d: ContactData): Promise<{ delivered: boolean }> {
  if (!configured()) return { delivered: false }
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Portfolio: ${d.subject}`,
        from_name: d.name,
        name: d.name,
        email: d.email,
        message: d.message,
      }),
    })
    const json = await res.json()
    return { delivered: res.ok && json.success === true }
  } catch {
    return { delivered: false }
  }
}
