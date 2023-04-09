# JavaScript Timer

This JavaScript Timer program allows users to set a countdown timer and displays the remaining time in an HH:mm:ss format. The timer can be started, reset, and will display a message when the countdown reaches zero.

## Features

1. The user can input a time in seconds.
2. The timer will start counting down when the user clicks the "Start" button.
3. The timer can be reset to "00:00:00" by clicking the "Reset" button.
4. The timer will display a "Time is Up" message when the countdown reaches zero.

## Implementation Details

The program uses the following HTML elements:
- An input field to enter the desired time in seconds.
- A "GO" button to start the timer.
- A "Reset" button to reset the timer.
- A span element to display the countdown.

The program uses several functions:

1. `formatTime(seconds)` - Takes a number of seconds as input and returns a formatted time string in the format "HH:mm:ss".
2. `createTimerAnimator()` - A factory function that returns an object with two methods for starting and resetting the timer.
3. The `start(seconds)` method begins the countdown and updates the displayed time every second.
4. The `reset()` method stops the countdown and resets the displayed time to "00:00:00".

Event listeners are added to the input field, the "Start" button, and the "Reset" button for user interaction.

- The input field listener filters out any non-digit characters.
- The "GO" button listener starts the timer with the entered time in seconds.
- The "Reset" button listener resets the timer.

<img width="845" alt="image" src="https://user-images.githubusercontent.com/100534408/230755047-b4f61033-b5fe-41cf-95cf-95769df78a2a.png">

