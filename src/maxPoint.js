function maxPoints(points) {

    if (points.length <= 2) return points.length;

    let maxPointsOnLine = 0;
    
    for (let i = 0; i < points.length; i++) {
        const slopes = new Map(); // Use a map to store slope -> count
        
        let duplicates = 1; // Counter for duplicate points
        let currentMax = 0; // Counter for maximum points on the same line through the current point
        
        const [x1, y1] = points[i];
        
        for (let j = i + 1; j < points.length; j++) {
            const [x2, y2] = points[j];
            
            // Calculate slope
            let slope;
            if (x1 === x2 && y1 === y2) {
                duplicates++;
                continue; // Skip if the points are the same
            } else if (x1 === x2) {
                slope = Infinity; // Vertical line, so slope is infinity
            } else {
                slope = (y2 - y1) / (x2 - x1); // Normal slope calculation
            }
            
            // Update the count of points on the same line
            const count = (slopes.get(slope) || 0) + 1;
            slopes.set(slope, count);
            currentMax = Math.max(currentMax, count);
        }
        console.log("currentMax >>",currentMax);
        // Update the global maximum
        maxPointsOnLine = Math.max(maxPointsOnLine, currentMax + duplicates);
    }
    
    return maxPointsOnLine;
}

module.exports = maxPoints;


