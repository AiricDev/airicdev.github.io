interface Env {
  airic_waitlist: D1Database;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let payload: { email?: unknown; website?: unknown };

  try {
    payload = await request.json();
  } catch {
    return response({ error: 'Invalid request.' }, 400);
  }

  // Honeypot field: bots see it, people do not.
  if (typeof payload.website === 'string' && payload.website.length > 0) {
    return response({ ok: true });
  }

  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : '';
  if (email.length > 255 || !emailPattern.test(email)) {
    return response({ error: 'Please enter a valid email address.' }, 400);
  }

  try {
    const result = await env.airic_waitlist
      .prepare('INSERT OR IGNORE INTO waitlist_subscribers (email) VALUES (?)')
      .bind(email)
      .run();

    return response({ ok: true, alreadyJoined: result.meta.changes === 0 });
  } catch (error) {
    console.error('Unable to save waitlist signup', error);
    return response({ error: 'Unable to save your email. Please try again.' }, 500);
  }
};

function response(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}
