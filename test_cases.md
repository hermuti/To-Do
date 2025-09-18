# Test Case for Simple To-Do App

## Test Case 1: Add a valid task
**Precondition;** App is loaded, task list is empty.
* **Steps:**
    1.  Enter "Buy groceries" in the input field.
    2.  Click the "Add Task" button.
*   Expected Result: The task "Buy groceries" is added to the list. The input field is cleared. Total task count updates to 1.
*   Status: PASS

## Test Case 2: Add an empty task
*   Precondition: App is loaded.
*   Steps:
    1.  Leave the input field empty.
    2.  Click the "Add Task" button.
*   Expected Result: An alert pops up saying "Please enter a task!". No task is added to the list. Total task count remains 0.
*   Status: PASS

## Test Case 3: Add a task with only spaces
*   Precondition: App is loaded.
*   Steps:
    1.  Enter "     " (multiple spaces) in the input field.
    2.  Click the "Add Task" button.
*   Expected Result: An alert pops up. No task is added. (The .trim() function should handle this).
*   Status: PASS
## Test Case 4: Add a task with only numbers
*   Precondition: App is loaded.
*   Steps:
    1.  Enter "finished chapter 1,2 and 3" in the input field.
    2.  Click the "Add Task" button.
*   Expected Result: The task "finished chapter 1,2 and 3" is added to the list. The input field is cleared. Total task count updates by 1.
*   Status: PASS
## Test Case 5: Add a task with only symbols
*   Precondition: App is loaded.
*   Steps:
    1.  Enter "buy 2% milk" in the input field.
    2.  Click the "Add Task" button.
*   Expected Result: The task "buy 2% milk" is added to the list. The input field is cleared. Total task count updates by 1.
*   Status: PASS
## Test Case 6: Add a task with both number & symbols
*   Precondition: App is loaded.
*   Steps:
    1.  Enter "call sam @ 2pm" in the input field.
    2.  Click the "Add Task" button.
*   Expected Result: The task "call sam @ 2pm" is added to the list. The input field is cleared. Total task count updates by 1.
*   Status: PASS
## Test Case 7: Delete a task with the delete button
*   Precondition: App is loaded.
*   Steps:
    1.  Click the "Delete" button.
*   Expected Result: The task which the delete button pressed on is removed from the list of tasks. Total task count is reduced by 1.
*   Status: PASS
## Test Case 8: adding a task to completed tasks list
*   Precondition: App is loaded.
*   Steps:
    1.  Select the check-box with check (with check mark).
*   Expected Result: The selected task is removed from the list.appears in the completed task list. Total task count is reduced by 1.
*   Status: PASS
## Test Case 9: removing a task from a completed tasks list
*   Precondition: App is loaded.
*   Steps:
    1. Uncheck the selected check-box to remove the check (without check mark).
*   Expected Result: The selected task is removed from the completed task list.appears in the task list. Total task count is updated by 1.
*   Status: PASS
## Test Case 10:  Clear all completed tasks
*   Precondition: Completed tasks exist in the completed tasks list.
*   Steps:
    1. Click the "Clear Completed" button.
*   Expected Result: All tasks in the completed section are removed. Task count remains unchanged.
*   Status: PASS
## Test Case 11: Add a duplicate tasks
*   Precondition: App is loaded.
*   Steps:
    1. Add a task (e.g., "Buy groceries").
    2. Add the same task again.
Expected Result: Both tasks appear in the list.
*   Status: PASS
## Test Case 12: Add multiple tasks rapidly
*   Precondition: App is loaded.
*   Steps:
    1. Enter several different tasks one after another, clicking "Add Task" each time.
    2. Add the same task again.
Expected Result: All tasks are added to the list in order. Task count updates correctly.
*   Status: PASS
## Test Case 13: UI responsiveness on different screen sizes
*   Precondition: App is loaded.
*   Steps:
    1.Resize the browser window to various sizes. 
Expected Result: The app layout remains usable and visually appealing.
*   Status: PASS



