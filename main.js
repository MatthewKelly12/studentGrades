const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];
const grades = {};

grades.A = 0;
grades.B = 0;
grades.C = 0;
grades.D = 0
grades.F = 0;
console.log(grades);

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 90) {
      grades.A += 1;
    }
    else if (scores[i] >= 81 && scores[i] <= 90) {
        grades.B += 1;
    }
    else if (scores[i] >= 71 && scores[i] <= 80) {
        grades.C += 1;
    }
    else if (scores[i] >= 61 && scores[i] <= 70) {
        grades.D += 1;
    }
    else if (scores[i] >= 51 && scores[i] <= 60) {
        grades.F += 1;
    }


}

console.log(grades)