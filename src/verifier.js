// Function to verify if a number is prime
function isPrime(number) {
    // TODO: Implement the prime number checking logic
    //Prime number is greater than 1 
    if (number <= 1) {
        return false
    }
    //divisible only by itself and 1
    if(number % 2 === 0 && number > 2) {
        return false
    }
    //loop through numbers from 3 and ending at sqrt
    const s = Math.sqrt(number)
    for (let i = 3; i <= s; i+=2) {
        if (number % i === 0){
            return false
        }
    }
    return true
}

export {isPrime};
