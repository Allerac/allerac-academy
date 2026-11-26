# 2.2 The terminal without fear

## Problem

A tutorial says: "run this in the terminal". A black (or nearly black) screen appears, asking for a command. You freeze. What is this? And what would you do *before* running anything?

*Try to think of an answer before you go on.*

## Blocks

### 1. The terminal is a conversation in text
The terminal is a way to talk to the computer by typing commands, instead of clicking on folders and buttons. You type a short request, press Enter, and it answers with text. It is not a place that is "too advanced": it is just another door into the same folders and files from the last lesson.

> **Tutor notes:** reassure. Analogy: asking for things by message instead of walking over to the cupboard. Common mistake: thinking a wrong command will "break the computer". The commands in this lesson only look around and create folders.

### 2. Four commands to get started
These four commands are enough to find your way around:
- `pwd` — "where am I?": shows the path of the current folder
- `ls` — "what is here?": lists files and folders
- `cd` — "let's go to another folder": changes the current folder, for example `cd pages`
- `mkdir` — "make a folder": for example `mkdir notes`

A handy bonus: `cat` shows the contents of a text file, for example `cat README.md`.

In the next lesson you will actually type these in the editor. For now, what matters is recognizing what each one does.

> **Tutor notes:** do not teach flags (`ls -la`, `cd ..`) unless the student asks. If they ask: `cd ..` goes up one folder, `cd ~` goes to the home folder. `mkdir` does not delete anything.

### 3. Ask AI to explain before you run it
Whenever a tutorial (or the AI itself) gives you a command you do not know, copy it and ask: "What does this command do, step by step? Does it change or delete anything?" Only run it when the explanation makes sense to you.

> **Tutor notes:** this is the core habit of the lesson. AI can also be wrong or suggest a dangerous command: that is why the student asks *before* and reads the answer. Good example questions: "is this read-only?" and "how do I undo it if it goes wrong?".

### 4. Do not run what you do not understand
A command can delete files, install things or send data elsewhere. If you did not understand it, do not run it. That goes for tutorials, coworkers and AI. Asking for another explanation, or waiting to ask the tutor, is the right choice.

> **Tutor notes:** do not give the student a list of dangerous commands to memorize, so as not to invite experimenting. If the student brings a scary command, explain it and ask them not to run it. Stress that "I don't know" is a professional answer.

### 5. On a tablet or phone
The terminal is more comfortable on a computer. On a tablet, GitHub Codespaces opens in the browser and the terminal works, especially if you have a keyboard. On a phone the screen is cramped, and a light editor like github.dev **has no terminal**: it only edits files, it does not run commands. If you are on a phone today, do the alternative mission: the habit of asking for an explanation is already worth the lesson. Next time you have a bigger screen, you can practice the commands for real.

> **Tutor notes:** be honest and encouraging. Do not pretend a phone replaces the terminal. If the student only has a phone, accept the alternative mission and agree to practice the terminal later. GitHub's official documentation confirms you can work in a codespace from a tablet.

## Mission

1. Ask Claude to explain, in simple words, what `pwd`, `ls`, `cd` and `mkdir` do.
2. Pick a command you do *not* know (for example, one from a tutorial) and ask: "What does this command do? Does it change or delete anything?"
3. Tell the tutor, in your own words, what each of the four commands does and what you understood about the unknown command. Say whether you would run it or not, and why.

In the next lesson, in Codespaces, you will practice `pwd` and `ls` for real.

**On a tablet or phone:** do the three steps above. You do not need to run any commands today. If you are on a tablet with a keyboard and want to try the terminal in Codespaces, go ahead; if anything seems confusing, stop and go back to the AI's explanation.

**How the tutor checks:** the student explains the four commands in their own words and shows the habit of asking before running, including saying "I wouldn't run it" when they did not understand.

## Go deeper

*To be decided.*
