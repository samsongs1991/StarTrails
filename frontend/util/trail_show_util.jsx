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

// --- BELOW --- will complete after building out the reviews portion of DB 

// export const starRating = trail => {

// }

// export const numReviews = trail => {

// }