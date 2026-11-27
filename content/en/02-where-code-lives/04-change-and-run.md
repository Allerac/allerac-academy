# 2.4 Change something with AI and see it run

## Problem

You improved your page with AI's help, but on GitHub the file is still the old one. How do you see the page for real in the browser, check that it looks good, and save the new version?

## Blocks

### 1. Ask for a change and check the file
Open the `my-academy-journal` codespace again (or create one, if you do not have it). Ask the AI (your chosen chat tool, or the editor's chat, if it shows up) for a concrete improvement to `index.html`: a color, a piece of text, a new section. Paste the suggestion into the file, or let the AI apply it, and **read the difference** before moving on. You are the one who signs off on the change.

> **Tutor notes:** connect it to lessons 1.2 and 1.5: check and iterate. A chat in a tab next to it is enough. One small improvement is enough.

### 2. See the page running
In the Codespaces terminal, in the project folder, run:

```
python3 -m http.server 8000
```

This command starts a simple server on port 8000 and serves the files in the folder. Codespaces usually forwards the port on its own and shows a button to open it in the browser. If it does not show up, open the **Ports** panel and open port 8000.

Look at the page calmly. If something looks odd, go back to the AI, adjust and reload. If the command does not work, ask the AI to explain the error message; do not run an alternative command you did not understand.

> **Tutor notes:** the default Codespaces image usually has Python. If it does not, the student asks the AI for help, without inventing tools. Automatic port forwarding is in the official documentation. Do not teach GitHub Pages here (that is for module 6). To stop the server: Ctrl+C in the terminal.

### 3. Save and send the new version
When the page looks the way you want, make a commit and send it to GitHub. In Codespaces, the simplest way is the Source Control icon (on the left): write a clear message in English, for example `Improve personal web page`, confirm, and *push* it (Sync / Push) to the repository.

This is the same "save with history" from module 0, now done from inside the editor. Branches and pull requests come in module 3: in this personal repository, committing to the main branch is fine.

At the end, stop the codespace so you do not use up your quota.

> **Tutor notes:** do not go deep into git (status, add, branch). The Source Control interface is enough. If they want the terminal: `git add index.html`, `git commit -m "Improve personal web page"`, `git push`. Messages in English. Confirm that the file on GitHub changed.

### 4. On a tablet or phone
On a tablet, if Codespaces is usable (best with a keyboard), follow the main path: edit, see the page on port 8000 and commit.

On a phone, the realistic path is different. Edit `index.html` on github.com (the edit file button) or on github.dev (change `github.com` to `github.dev` in the URL), ask the AI for the improvement, paste it and check it, and commit from there. github.dev **has no terminal**, so you cannot run `python3 -m http.server` or see the local server.

To get an idea of the result on a phone, see whether your AI tool can show a preview using the final HTML, or open the file later on a computer or tablet. It is a preview, not the same as seeing the file actually being served. [GitHub Mobile](https://docs.github.com/en/get-started/using-github/github-mobile) helps you check the commit afterwards, not run the page.

> **Tutor notes:** do not suggest third-party preview services. Be explicit: no terminal, no local server. Accept an AI preview or a visual check of the HTML, and the commit on GitHub as the required part. On a tablet with Codespaces, ask for the real preview.

## Mission

**On a computer (main path):**

1. Open the `my-academy-journal` codespace.
2. Ask the AI for an improvement to `index.html` and apply at least one change you understood.
3. Run `python3 -m http.server 8000`, open the page in the browser and check the result.
4. Commit with a clear message in English and *push* it to GitHub.
5. Stop the codespace.
6. Send the tutor the link to the file on GitHub and say what changed and what you saw in the browser.

**Optional on a computer with [Cursor](https://cursor.com/docs/agent/overview):** if you already have Git and Cursor installed, copy your repository's HTTPS address from GitHub's **Code** button and run `git clone <URL>` with that address. Open the folder in Cursor and ask Agent for a small change to `index.html`. Review the diff, run the page from the terminal as in the main path, then commit.

**On a tablet or phone:**

- **On a tablet:** if Codespaces works, follow the main path.
- **On a phone:** edit `index.html` on github.com or github.dev, with the AI's help, and commit. Use your AI tool's preview if available, or check the page later on a bigger screen. Tell the tutor the link to the file, what changed, how you checked it, and that it was not possible to run the server on the phone.

**How the tutor checks:** `index.html` in the repository has a new commit with a clear message, and the student describes the change. On the main path, they also saw the page served in the browser. On the mobile path, they explain how they checked it (AI preview or bigger screen) and the terminal limit.

## Go deeper

- Forwarding ports in Codespaces: [official GitHub documentation](https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace). Checked on November 26, 2026.
- Editing files on GitHub: [official documentation](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files). Checked on November 26, 2026.
