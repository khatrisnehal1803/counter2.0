✅ Counter App 2.0 – Detailed Description
📱 About the App
Counter App 2.0 is an interactive web application built using React. It enables users to increase, decrease, or reset a counter value, while also providing real-time insights into whether the number is Even or Odd, and whether it’s a Prime Number.

It’s designed for learning and practice of:

React state management

Conditional rendering

UI feedback based on dynamic values

Unit testing with predictable selectors (data-testid)

🚀 Features
✅ Counter Functionality
Initial Value:
Starts at 0.

Increment (+1):
Increases the counter by one with every click.

Decrement (-1):
Decreases the counter by one with every click.

Note: Button is disabled when the counter is 0 so the count doesn’t go negative.

Reset:
Resets the counter back to zero instantly.

✅ Odd or Even Detection
The app checks whether the current counter value is even or odd.

Displayed as:

"Even"

"Odd"

Helps users observe changes in number type as they click the buttons.

✅ Prime Number Checker
Displays whether the current number is a prime number.

Shown as:

"true" → Number is prime.

"false" → Number is not prime.

Important Rules:

Numbers less than 2 (i.e. 0 and 1) are not prime.

✅ User Experience
Simple and clean layout.

Clear buttons for user actions.

Visual cues (can be enhanced further with color coding or icons).

🧪 Testing Support
All interactive elements and displayed results use data-testid attributes to support automated testing.

Available test IDs:

data-testid="counter"

data-testid="plusonebtn"

data-testid="minusonebtn"

data-testid="resetbtn"

data-testid="odd-or-even"

data-testid="is-prime"

This ensures consistent and reliable testing for correctness of:

Initial state

Button functionality

Correct text output for odd/even and prime detection.

⚙️ Technologies Used
React for building UI components.

useState Hook for managing dynamic counter values.

Conditional Rendering for displaying Odd/Even and Prime statuses.

CSS Modules (recommended) for scoped styling without affecting global styles.

Optionally, icons or emoji can be used for a better visual experience.

🎯 Why This App?
This app is excellent for:

Practicing React fundamentals.

Understanding conditional logic in UI rendering.

Learning how to integrate test IDs for front-end testing.

Demonstrating simple yet functional front-end logic (e.g. prime checking).

Preparing for coding assessments or interviews involving basic React.

📸 Sample UI Flow
Initial State:

vbnet
Copy
Edit
Counter: 0
Even
false
Buttons: -1 (disabled), +1, Reset
Example Interaction:

Click +1 → Counter: 1

Display changes to:

vbnet
Copy
Edit
Counter: 1
Odd
false
Click +1 → Counter: 2

Display changes to:

vbnet
Copy
Edit
Counter: 2
Even
true
Click Reset → Counter returns to 0.

💻 How to Run
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
Run automated tests:

bash
Copy
Edit
npm test
This Counter App 2.0 is a small but powerful demonstration of React’s core capabilities, ideal for both learning and technical evaluations!

