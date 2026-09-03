const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles) {
  if(config.fault) {
    console.log('Faulted phase!');
    return;
  }

  if(!config.phases.length) {
    console.log('No phases found');
  } else {
    for(let i = 0; i !== cycles; i++) {
      for (let phase of config.phases) {
        if(phase.duration <= 0) {
          console.log('Invalid phase detected')
        } else {
          console.log(`Switching to ${phase.color} for ${phase.duration} s`)
        }
      }
    }
  }
}

function generateTimeline(config, cycles) {
  const listDuration = [];
  let lastNumber;

  if(!config.phases.length) {
    return listDuration;
  }

  for(let i = 0; i !== cycles; i++) {
    for(let phase of config.phases) {
      if(!listDuration.length) {
        listDuration.push(phase.duration);
        continue;
      }

      lastNumber = listDuration[listDuration.length - 1];

      listDuration.push(lastNumber + phase.duration)
    }
  }

  return listDuration;
}