// Function to find the temperature closest to zero using binary search
function closestToZero(temperatures) {
    if (temperatures.length === 0) {
        return 0;
    }

    // Sort the temperatures array
    temperatures.sort((a, b) => a - b);

    let left = 0;
    let right = temperatures.length - 1;

    // Binary search to find the closest to zero
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (temperatures[mid] === 0) {
            return 0;
        } else if (temperatures[mid] < 0) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Compare the closest values found
    const leftClosest = left < temperatures.length ? temperatures[left] : Infinity;
    const rightClosest = right >= 0 ? temperatures[right] : -Infinity;

    if (Math.abs(leftClosest) < Math.abs(rightClosest)) {
        return leftClosest;
    } else if (Math.abs(leftClosest) > Math.abs(rightClosest)) {
        return rightClosest;
    } else {
        return leftClosest > rightClosest ? leftClosest : rightClosest;
    }
}

module.exports = closestToZero;