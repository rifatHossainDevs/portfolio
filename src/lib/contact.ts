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

/** TODO: connect an email service (Formspree, EmailJS, your own API) here and return { delivered: true }. */
export async function sendMessage(_data: ContactData): Promise<{ delivered: boolean }> {
  return { delivered: false }
}
