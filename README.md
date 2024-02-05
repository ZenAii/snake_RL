# Snake RL Game

Welcome to the Snake RL Game! This project is an implementation of the classic Snake game, where the snake is controlled by a reinforcement learning (RL) agent. The RL agent, based on Q-learning, learns to navigate the snake in the game environment autonomously.

## Getting Started

To observe the Snake RL Game in action:

1. Open the `index.html` file in a web browser.

2. The game canvas will be displayed, showcasing the snake's movements controlled by the RL agent.

## Features

- **Game Loop:** The game loop ensures continuous updates and rendering on the canvas.

- **Game Speed Control:** Adjust the game speed using the "Game Speed" slider.

- **Score Display:** The current score is displayed on the top right corner of the canvas.

- **RL Agent:** The game includes an RL agent (RLSnake class) that autonomously learns and makes decisions based on the Q-learning algorithm. The Q-table guides the snake's movements.

## Controls

No user controls are provided, as the RL agent autonomously controls the snake.

## RL Agent Configuration

The RL agent can be configured by adjusting the `alpha` and `gamma` values using the corresponding input elements:

- `alpha`: Learning rate of the Q-learning algorithm. Adjust the learning speed of the agent.

- `gamma`: Discount factor for future rewards. Adjust the importance of future rewards in decision-making.

## Additional Functionality

- **Reset Snake:** You can reset the snake's position and the game by calling the `resetSnake()` function.

## Notes

- The game canvas is represented by the `canvas` element, and the game logic is implemented in JavaScript.

- The RLSnake class contains the Q-learning algorithm and guides the snake's movements.

- The Snake class represents the snake in the game, and the Apple class represents the apple that the snake can eat.

Feel free to observe how the RL agent adapts its strategy over time as it autonomously controls the snake in the Snake RL Game!

