[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12582040&assignment_repo_type=AssignmentRepo)
![Institute of Data Logo](https://x4w8f4y8.rocketcdn.me/wp-content/uploads/2020/05/iod_h_tp_white_c.png)

# Module 1, Part 9: Software Engineering - Testing

### Exercise 7: Prime Number Verifier with Comprehensive Testing

**What's a Prime Number?**  
A prime number is a number greater than 1 that is divisible only by itself and 1. In other words, it doesn’t have any divisors other than 1 and itself. For example, 2, 3, 5, and 7 are prime numbers, but 4, 6, 8, and 9 are not.

**Why are Prime Numbers Important?**  
Prime numbers play a fundamental role in number theory and have critical applications in fields like cryptography. They form the backbone of public key cryptography, which secures our online transactions, communications, and more.

> "The primes are the raw material out of which we have to build arithmetic."


#### Steps:

1. **Environment Setup:**
    - Clone this repository to your local machine.
    - Navigate to the project directory.
    - Initialize a Node.js environment and install the necessary packages by running `npm install` in the project directory, this includes Vitest for testing and WebdriverIO for functional testing.
    - Outcome: A ready-to-code environment.

2. **Test-First Programming:**
    - Define the behaviors expected from the Prime Number Verifier.
    - Use Vitest to write unit tests for individual components of the verifier.
    - Outcome: Test cases ready to validate the verifier's implementation.

3. **Unit Testing:**
    - Start coding the verifier. Implement functions to determine if a number is prime.
        - In your JavaScript, the function should:
             1. Check if the number is less than 2 (as these are not primes).
             2. Formally verify that the number is not divisible by any number from 2 to the square root of the number.
             3. If it passes the check, then it's prime.
    - For each function, ensure you have written unit tests.
    - Outcome: Validated individual components of the verifier.

4. **Frontend Development:**
    - Craft a simple web interface using HTML, CSS where users can input numbers and see results.
    - Outcome: A user interface connected to the verifier via including an external JavaScript file and calling a function that is used for **both** unit testing in Node.js and Functional Testing in the browser.

5. **Functional Testing with WebdriverIO:**
    - Automate browser interactions to test the complete functionality using WebdriverIO.
    - Validate that the program correctly identifies primes through the web interface.
    - Outcome: A user-friendly verifier with tested web interactions.

6. **Review, Push, and PR:**
    - Conduct a self-code review, ensuring best practices and clean code.
    - Push your code to GitHub.
    - Create a PR for peer reviews, integrating CI for running tests automatically on PRs.
    - Outcome: A repository with documented code and automated workflows.

#### Resources:
1. [Vitest Documentation](https://vitest.dev/)
2. [WebdriverIO Guide](https://webdriver.io/docs/gettingstarted)
3. [GitHub Code Review and PR Guide](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)

#### Extension:
1. Consider adding more advanced features, such as verifying ranges of prime numbers.
2. Reflect on how prime numbers play a crucial role in today's digital world, ensuring data security.

