# 3.5 Reading code you did not write

## Problem

You join a project with hundreds of files, and someone asks: "change the text on that button". You have never seen this code. Where do you start looking?

*Try to think of an answer before you go on.*

## Blocks

### 1. You do not need to understand everything
Nobody reads a whole project before starting, not even people who have worked on it for years. For a task, you only need to understand the part it touches. The goal is to find that part and understand enough to change it safely.

> **Tutor notes:** take the pressure off. Analogy: arriving in a new city. You do not memorize the whole map; you look up the address you need.

### 2. Start with the README
The README usually explains what the project is, how it is organized and where each part lives. In allerac-academy, for example, the README says the course content is in `content/` and the website is in `app/`. That already cuts the search in half.

> **Tutor notes:** also show `app/README.md`, which has a map of the website's folders.

### 3. Search for what you see on screen
The text you see on screen is almost always written in some file. Use search: on GitHub, the repository's search box; in the editor, the magnifying glass. Search for the button's exact text, for example `I tried, let's go`, and see which file it appears in.

> **Tutor notes:** in allerac-academy, the interface texts live in `app/public/i18n/en.js` (and `pt.js`, `es.js` for the other languages). GitHub code search works in repositories the student has access to. If the search finds nothing, try a shorter piece of the text.

### 4. Ask AI to explain, with context
Copy the file (or a part of it) into AI and give it context: "This file is from a course website. Explain in simple words what it does and what each part is for." Also ask: "What would happen if I changed this line?"

> **Tutor notes:** reinforce lesson 2.5: before pasting code into AI, check that there are no passwords, keys or people's data in it. The interface text files in allerac-academy contain none of that. On other companies' projects, follow the team's rules about what can be shared.

### 5. Check the explanation
AI can make things up (lesson 1.2). Check what it said in the code itself: does the name it mentioned exist in the file? Does the explanation match what you see on screen? If something does not match, ask again or ask the team.

> **Tutor notes:** a good test: ask AI to point to the exact line that does what it described, and have the student find that line in the file.

## Mission

This mission is read-only: you do not change anything in allerac-academy.

**On a computer (main path):**

1. Open the [Allerac/allerac-academy](https://github.com/Allerac/allerac-academy) repository and read the README.
2. Open the github.dev editor (change `github.com` to `github.dev` in the URL or press the `.` key). For reading code, it is enough: it is free and does not use your Codespaces quota.
3. Use search to find the file that contains the text `I tried, let's go`.
4. Copy that file into AI and ask for a simple explanation of what it does.
5. Check at least one thing AI said by finding the line in the file.
6. Tell the tutor: the file's path, what it does and what you checked.

**On a tablet or phone:** open the repository in the browser and use github.com's own search to find the text. Open the file, copy the section into AI and continue from step 4. On a phone, the whole file is long: a section of 10 to 20 lines is enough.

**How the tutor checks:** the student gives the path `app/public/i18n/en.js`, explains in their own words that the file holds the interface texts, and mentions one thing they checked in the code.

## Go deeper

- The github.dev editor: [official GitHub documentation](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor). Checked on November 26, 2026.
- GitHub code search: [search syntax](https://docs.github.com/en/search-github/github-code-search/understanding-github-code-search-syntax). Checked on November 26, 2026.
