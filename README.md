# ClosestToZero

This project provides a solution for finding the temperature closest to zero from a list of temperatures. The application reads input values interactively, validates the inputs, and computes the temperature closest to zero using binary search. It includes several features to ensure code resilience and enhance the user experience.

## Features
- **Interactive Input**: Users can enter the number of temperatures and the temperature values interactively.
- **Input Validation**: Ensures the number of temperatures provided matches the specified count, checks for non-number inputs, and validates the temperature range.
- **Binary Search**: Utilizes binary search to efficiently find the temperature closest to zero.
- **Error Handling**: Provides clear error messages for invalid inputs.

## Best Practices
1. **Input Validation**: Always validate user inputs to prevent invalid data from causing unexpected behavior or crashes. This includes checking for non-number inputs and ensuring the input count matches the specified count.
2. **Error Handling**: Implement comprehensive error handling to provide clear and informative error messages. This helps users understand what went wrong and how to fix it.
3. **Unit Testing**: Write unit tests to cover various scenarios and edge cases. This ensures the correctness of the program and helps identify issues early.
4. **Code Modularity**: Keep the code modular by separating concerns. For instance, separate the input reading and parsing logic from the main algorithm.
5. **Documentation**: Provide clear and detailed documentation to help users understand how to use the application and contribute to the project.

## Installation
1. Navigate to the project directory:

    cd ClosestToZero

2. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Application
To run the application, execute the following command and follow the prompts to enter the input values interactively:
```sh
node readAndParseInput.js
```

Example interaction:
```
Enter the number of temperatures: 5
Enter the temperatures separated by space: 1 -2 -8 4 5
1
```

## Running the Tests
To run the tests, use the following command:
```sh
npm test
```

## Test Cases
The test cases cover various scenarios to ensure the correctness of the `closestToZero` function:

1. **No Temperatures Provided**: Ensures the function returns `0` when no temperatures are given.
    ```javascript
    expect(closestToZero([])).toBe(0);
    ```

2. **Temperature Closest to Zero**: Tests various cases where the function should return the temperature closest to zero.
    ```javascript
    expect(closestToZero([1, -2, -8, 4, 5])).toBe(1);
    expect(closestToZero([10, -10])).toBe(10);
    expect(closestToZero([-1, -2, 2, 1])).toBe(1);
    expect(closestToZero([-273, 5526, 0])).toBe(0);
    ```

3. **Single Temperature Input**: Tests the function with a single temperature input.
    ```javascript
    expect(closestToZero([5])).toBe(5);
    expect(closestToZero([-3])).toBe(-3);
    ```

4. **Multiple Equally Close to Zero**: Ensures the function returns the positive temperature if multiple are equally close to zero.
    ```javascript
    expect(closestToZero([-5, 5])).toBe(5);
    expect(closestToZero([-1, 1])).toBe(1);
    ```

5. **Extreme Range Temperatures**: Tests the function with temperatures at the extreme valid range.
    ```javascript
    expect(closestToZero([-273, 5526, -5526, 273])).toBe(273);
    expect(closestToZero([-273, 5526])).toBe(-273);
    ```


6. **Mixed Positive and Negative Temperatures**: Tests with mixed positive and negative temperatures.
    ```javascript
    expect(closestToZero([-15, -7, 10, 3, -3])).toBe(3);
    ```

7. **All Negative Temperatures**: Tests with all negative temperatures.
    ```javascript
    expect(closestToZero([-20, -15, -5, -1])).toBe(-1);
    ```

8. **All Positive Temperatures**: Tests with all positive temperatures.
    ```javascript
    expect(closestToZero([20, 15, 5, 1])).toBe(1);
    ```

9. **Temperatures Including Zero**: Tests with temperatures including zero.
    ```javascript
    expect(closestToZero([0, -1, 1, -2, 2])).toBe(0);
    ```
10. **No Temperatures**: Tests with no temperature provided.
    ```javascript
    expect(closestToZero([0, -1, 1, -2, 2])).toBe(0);
    ```