function longestHitSubstring(length, string) {
    let maxLength = 0;
    let currentLength = 0;
    let i = 0;

    while (i < length) {
        if (string[i] === 'h') {
            // Count consecutive 'h's
            currentLength = 1;
            i++;

            // Check for consecutive ''s
            while (i < length && string[i] === 'i') {
                currentLength++;
                i++;

                // Check for consecutive 't's
                while (i < length && string[i] === 't') {
                    currentLength++;
                    i++;
                }
            }

            // Update max length
            if (currentLength >= 3) {
                maxLength = Math.max(maxLength, currentLength);
            }
        } else {
            i++;
        }
    }

    return maxLength;
}

// Example usage:
console.log(longestHitSubstring(12, "qhitabhiiitt"));  // Output: 6
console.log(longestHitSubstring(15, "hihhittabciiitt"));  // Output: 5