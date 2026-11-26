# 2.5 Basic security

## Problem

You ask AI for help getting into an account. It replies: "paste your password here and I'll sort it out." Would you paste it?

*Try to think of an answer before you go on.*

## Blocks

### 1. AI does not need your password
An AI can explain how to log in, how to recover access or how to turn on a setting. It does not need to see your password, the SMS code, or a service's key to teach you. If it asks for that, do not paste it. Drop the subject and, if needed, start a new conversation.

This goes for any assistant: chat, agent or "a coworker at the computer".

> **Tutor notes:** connect it to lesson 2.2 (do not run what you do not understand) and 0.1 (you are responsible). Common mistake: pasting it "just so it can check it's right". The answer is always no.

### 2. What never to paste
Do not paste into an AI (or into a chat, or a public ticket):
- passwords and verification codes;
- keys and tokens (for example an *API key*, a GitHub token, a server secret);
- other people's personal data, or customer data.

Your name in a README you already made public is one thing. Someone's password, a customer's document or another person's email are another. When in doubt, do not paste: describe the problem without the sensitive data.

> **Tutor notes:** do not ask for real examples from the student's working life. Keep it generic. Tokens and keys come back in force in module 6 (environment variables and secrets). If the student has pasted something in the past, guide them to change the password or revoke the token, without excessive alarm.

### 3. Two-factor authentication on GitHub
Two-factor authentication (2FA) asks, on top of your password, for a code or a confirmation on your phone. That way, a password alone is not enough to get into your account.

On GitHub: **Settings**, **Password and authentication**, **Enable two-factor authentication**. The recommended way is an authenticator app (TOTP), which is more reliable than SMS, especially outside the United States. Keep the recovery codes in a safe, private place. Do not send them to the tutor, do not paste them into an AI and do not publish them.

[GitHub Mobile](https://docs.github.com/en/get-started/using-github/github-mobile) can also be part of this: the app can protect your account with 2FA and confirm login attempts.

> **Tutor notes:** NEVER ask for the password, recovery codes, screenshots of those codes or the authenticator code. Only confirm that the student turned it on and stored the codes somewhere safe. If they already have 2FA (GitHub now requires it from many people who contribute code), celebrate and move on. Recommend TOTP over SMS, as the official documentation does.

## Mission

1. Turn on two-factor authentication on your GitHub account, following the [official documentation](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication). If it is already on, check that you still have your recovery codes stored.
2. Keep the recovery codes in a safe place (not in the repository, not in a chat and not in an AI).
3. Tell the tutor, with just a yes or no and one sentence: whether 2FA is on and whether the recovery codes are stored. Do not send the codes, or a photo of them.

This mission works well on a phone: the phone is where the authenticator app (and, if you want, GitHub Mobile) lives.

**How the tutor checks:** the student says that 2FA is on and that they stored the recovery codes. The tutor never asks for the password, codes or screenshots of those codes. If the student pastes a code by mistake, ask them to treat those codes as compromised, generate new ones on GitHub and not send them again.

## Go deeper

- Configuring two-factor authentication: [official GitHub documentation](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication). Checked on November 26, 2026.
- GitHub Mobile, including 2FA in the app: [official documentation](https://docs.github.com/en/get-started/using-github/github-mobile). Checked on November 26, 2026.
