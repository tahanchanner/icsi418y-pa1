# icsi418y-pa1
ICSI 418Y Programming Assignment 1

# Task List

**Author:** Tahan Channer

## Description

Task List is a simple browser-based task management page. It lets a user
enter a task name, choose a priority level (Low, Medium, or High), and add
it to a running list. Tasks can be marked as completed (shown with a
strikethrough and a dimmed background) or removed entirely. Each task is
also color-coded along its left edge based on its priority. Tasks are kept
in memory only for the current session — the list resets any time the page
is refreshed.

## Files

- `index.html` — page structure (heading, form, task display area)
- `style.css` — styling, including priority colors and completed-task styling
- `script.js` — application logic (adding, completing, and deleting tasks)

## How to Run

1. Make sure all three files (`index.html`, `style.css`, `script.js`) are
   saved together in the same folder.
2. Open `index.html` in any modern web browser:
   - Double-click the file, **or**
   - In VS Code, right-click `index.html` and choose "Open with Live Server"
     (if the Live Server extension is installed).
3. No installation, build step, or server is required.

## How to Use

1. Type a task name into the **Task** field.
2. Choose a priority from the **Priority** dropdown (Low, Medium, or High).
3. Click **Add Task** to add it to the list.
4. Click **Complete** on any task to mark it done (click **Undo** to reverse it).
5. Click **Delete** on any task to remove it from the list.

## Known Problems / Incomplete Features

- Tasks are not saved anywhere — refreshing or closing the page clears the
  entire list, since there is no local storage or backend.
- There is no way to edit a task's name or priority after it has been added;
  it must be deleted and re-added instead.
- Tasks cannot be reordered or sorted (e.g., by priority or completion status).
- No duplicate-task checking — the same task name can be added multiple times.