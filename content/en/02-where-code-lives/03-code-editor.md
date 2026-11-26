# 2.3 Your code editor

## Problem

You already know what a file is and what a terminal is. But opening the project in one place, editing in another and running commands in a third is tiring. Where can all of this be together, in one place, without installing anything on your computer?

## Blocks

### 1. The editor is your work desk
A code editor is the program where you see the folders, open files, edit the text and, often, have a built-in terminal. Visual Studio Code (VS Code) is the most used editor in the world. In this lesson you will use the version of it that runs in the browser, so there is nothing to install.

> **Tutor notes:** do not compare editors. The point is "one single desk". Installing it locally comes at the end, as optional.

### 2. GitHub Codespaces: the editor in the browser
GitHub Codespaces opens your repository in VS Code inside the browser, with the folders, search and a real terminal ready. A personal GitHub account includes a free monthly quota. You do not need to memorize numbers: the [official documentation](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces) explains the quota, and it can change.

To avoid wasting the quota:
- when you finish, stop the codespace (closing the tab is not enough);
- when you will not use it anymore, delete the codespace.

In the next lesson you come back to the same environment. If the quota runs out and there is no payment method, GitHub blocks usage until the next month.

> **Tutor notes:** do not quote exact hours (they change). Point to the documentation. Highlight: closing the tab does not stop it. Stopping ends compute usage; deleting ends storage usage. The student uses the personal `my-academy-journal` repository, so the quota is the personal account's.

### 3. Finding your way: files, search and terminal
When Codespaces opens, pay attention to three pieces:
- on the left, the file explorer (the list of folders and files);
- search (the magnifying glass icon), to find text in any file;
- at the bottom, the integrated terminal, where you run `pwd` and `ls`.

Click `index.html` and `README.md` to see them. It is the same repository from module 0, now with a complete work desk.

> **Tutor notes:** the icons may vary a little, but explorer, search and terminal are always in VS Code. If the terminal does not show up: the Terminal menu, or the panel at the bottom. If the codespace is slow, that is normal the first time.

### 4. On a tablet or phone
GitHub's documentation confirms it: you can work in a codespace from a tablet. It works best with a keyboard. A phone screen is cramped and is not a good place for the full editor.

On a phone (and on a tablet, if Codespaces does not help), use **github.dev**: in the repository, change `github.com` to `github.dev` in the address bar. If you have a keyboard, you can also press the `.` (period) key. It is the same kind of editor, opens instantly and is free, but **it has no terminal and does not run the project**. You can see folders, open files and search text.

You can also browse and edit files on the github.com website itself, in your phone's browser. And the **GitHub Mobile** app (Android and iOS) is good for looking at the repository, issues and pull requests, not for replacing the editor.

> **Tutor notes:** be honest about the limits. github.dev is VS Code for the Web: no compute and no terminal, according to the official documentation. Codespaces on a tablet is official ("work on your computer, a friend's laptop or a tablet"). On a phone, accept the explorer and search in github.dev or github.com, without requiring a terminal. Pressing `.` on a phone is hard; changing the URL is the more realistic path.

### 5. Optional: VS Code on your computer
If you want, you can [install VS Code](https://code.visualstudio.com/) on your computer and open the project there, or connect your local VS Code to Codespaces. It is not needed for this course: the main path is still the editor in the browser.

> **Tutor notes:** keep it short. Do not teach cloning with `git clone` now. If the student already has VS Code, great; if not, do not push.

## Mission

**On a computer (main path):**

1. Open the `my-academy-journal` repository on GitHub.
2. Click the **Code** button, open the **Codespaces** tab and create a codespace (the default options are fine). The first time can take a minute or two.
3. In the editor, find `index.html` in the file explorer, open `README.md`, and use search to find a word you wrote in the README.
4. Open the integrated terminal and run `pwd` and `ls`. Check that the list looks like the repository's files.
5. When you finish this session, stop the codespace at [github.com/codespaces](https://github.com/codespaces) (the **...** menu, then **Stop codespace**).
6. Tell the tutor what you saw from `pwd` and `ls`, and whether you found the word with search.

**On a tablet or phone:**

- **On a tablet:** if you can, follow the Codespaces path above, preferably with a keyboard. If the screen gets in the way, use the phone path.
- **On a phone:** open `my-academy-journal` in the browser and change `github.com` to `github.dev` in the URL (or edit on github.com itself). Open `index.html` and `README.md`, and use search if it shows up. Tell the tutor what you found. Do not try to run `pwd` or `ls`: github.dev has no terminal. If you only want to review the repository, [GitHub Mobile](https://docs.github.com/en/get-started/using-github/github-mobile) also works for looking at files, issues and how the work is going.

**How the tutor checks:** on the main path, the student opened the repository in the editor, found both files, used search and ran `pwd` and `ls`. On the mobile path, they found the same files on github.dev or github.com and can explain the limit (no terminal).

## Go deeper

- How to create a codespace: [official GitHub documentation](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository). Checked on November 26, 2026.
- How to stop and resume a codespace: [stopping and starting](https://docs.github.com/en/codespaces/developing-in-a-codespace/stopping-and-starting-a-codespace). Checked on November 26, 2026.
- The editor in the browser, without a terminal: [the github.dev web-based editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor). Checked on November 26, 2026.
- The VS Code interface: [User interface](https://code.visualstudio.com/docs/editing/getting-started/userinterface) (official documentation). Checked on November 26, 2026.
