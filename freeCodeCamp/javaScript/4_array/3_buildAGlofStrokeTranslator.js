const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, stroke) {
  if (stroke === 1) {
    return 'Hole-in-one!';
  }

  let score = stroke - par;

  if (score <= -2) {
    return 'Eagle';
  } else if (score <= -1) {
    return 'Birdie';
  } else if (score == 0) {
    return 'Par';
  } else if (score == 1) {
    return 'Bogey';
  } else if (score == 2) {
    return 'Double Bogey';
  } else {
    return 'Go Home!';
  }

}