# Bug Reports for Simple To-Do App

## Bug 1: Input field is not cleared after adding a task
*   Priority: Low
*   Severity: Minor
*   Steps to Reproduce:
    1.  Navigate to the To-Do app.
    2.  Enter any task text (e.g., "Test task").
    3.  Click the "Add Task" button.
*   Expected Result: The task is added, and the input field is cleared for the next task.
*   Actual Result: The task is added, but the input field still contains the text "Test task".
*   Environment: Chrome v125, Windows 10

**Root Cause:** The line of code responsible for clearing the input field ('taskInput.value = "";') was commented out.
**Fix** Removed the comment slashes '//' from the line 'taskInput.value = "";'.
**Date Fixed:** 2025-09-18
**Retake Result:** PASS. the input field now clears correctly after adding a task.

## Bug 2: "Clear Completed" button does not remove completed tasks
*   Priority: Medium
*   Severity: Major (functionality broken)
*   Steps to Reproduce:
    1.  Navigate to the To-Do app.
    2.  Add one or more tasks.
    3.  Mark tasks as completed by clicking on them (they get a line-through style).
    4.  Click the "Clear Completed" button.
*   Expected Result: All completed tasks are removed from the list.
*   Actual Result: Completed tasks remain in the list after clicking "Clear Completed".
*   Environment: Chrome v125, Windows 11

**Root Cause:** The line of code responsible for clearing the complete task list(function clearCompleted() {
    // const completedList = document.getElementById('completedList');
    // while (completedList.firstChild) {
    //     completedList.removeChild(completedList.firstChild);
    // }
    // updateTaskCount();
}) was commented out.
**Fix** Removed the comment slashes '//' from the line of code in script.js.
**Date Fixed:** 2025-09-18
**Retake Result:** PASS. the input field now clears correctly after adding a task.

## Bug 3: Total task counter displays incorrect value after operations
*   Priority: Medium
*   Severity: Minor
*   Steps to Reproduce:
    1.  Navigate to the To-Do app.
    2.  Add two tasks.
    3.  Complete one task by clicking on it.
    4.  Delete the other task using its Delete button.
*   Expected Result: The total task counter should show 0 (no active tasks).
*   Actual Result: The total task counter shows an incorrect value (e.g., still shows 1 or 2).
*   Environment: Chrome v125, Windows 11

**Root Cause:** The line of code responsible for updating the number of task ('// updateTaskCount();') was commented out.
**Fix** Removed the comment slashes '//' from the line 'updateTaskCount();'.
**Date Fixed:** 2025-09-18
**Retake Result:** PASS. The total task counter now updates correctly after all operations.


## Bug 4: Alert does not appear when adding an empty task
*   Priority: High (prevents user from understanding why action failed)
*   Severity: Minor
*   Steps to Reproduce:
    1. Navigate to the To-Do app.
    2. Leave the input field empty.
    3. Click the "Add Task" button.
*   Expected Result: An alert appears, notifying the user to enter a task.
*   Actual Result: No alert appears; nothing happens when the button is clicked.
*   Environment: Chrome v125, Windows 11

**Root Cause:** The line of code responsible for causing the alert ('alert("Please enter a task!");') was commented out.
**Fix** Removed the comment slashes '//' from the line 'alert("Please enter a task!");'.
**Date Fixed:** 2025-09-18
**Retake Result:** PASS. The alert now appears when trying to add an empty task.


## Bug 5: Completed tasks do not display visual indication
*   Priority: Medium
*   Severity: Minor (usability issue)
*   Steps to Reproduce:
    1. Navigate to the To-Do app.
    2. Add a task.
    3. Click on the task text to mark it as completed.
*   Expected Result: The completed task text displays with a line-through style.
*   Actual Result: The completed task text does not show any visual change; it appears unchanged.
*   Environment: Chrome v125, Windows 11

**Root Cause:** The line of code responsible for causing the alert ('/* .completed span {
    text-decoration: line-through;
} */') was commented out.
**Fix** Removed the comment slashes '/**/' from the line '.completed span {
    text-decoration: line-through;
}'.
**Date Fixed:** 2025-09-18
**Retake Result:** PASS.  Completed tasks now display with a line-through style for clear visual indication.