// Exercise B: Grade Calculator

function getGrade(score){

    if(isNaN(score) || score < 0 || score > 100){
        return "Invalid input";
    }

    if(score >= 80){
        return "A";

    } else if(score >= 70){
        return "B";

    } else if(score >= 60){
        return "C";

    } else if(score >= 50){
        return "D";

    } else{
        return "F";
    }
}

const testScores = [49, 50, 60, 69, 70, 79, 80, 100, -5];

for(let score of testScores){
    console.log(`Score: ${score}, Grade: ${getGrade(score)}`);
    
}