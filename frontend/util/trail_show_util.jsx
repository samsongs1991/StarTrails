import React from "react";

export const difficultyLabel = trail => {
    if(trail.difficulty === "easy") {
        return <img src="images/EasyLabel.png" alt="Easy" />;
    } else if (trail.difficulty === "moderate") {
        return <img src="images/ModerateLabel.png" alt="Moderate" />;
    } else if (trail.difficulty === "hard") {
        return <img src="images/HardLabel.png" alt="Hard" />;
    }
}

export const trailTime = trail => {
    let time = "";
    let min = trail.length * 30;
    if(min >= 60) {
        let hr = Math.floor(min / 60);
        min = min % 60;
        time = `${hr} h ${min} m`
    } else {
        time = `${min} m`
    }
    return time;
}

export const trailLocation = trail => {
    if(trail.location) {
        return trail.location;
    } else {
        return `${trail.city}, ${trail.state}`;
    }
}

// --- BELOW --- will complete after building out the reviews portion of DB 

// export const starRating = trail => {

// }

// export const numReviews = trail => {

// }