const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  // Условие 1: Если значение — пустая строка, удаляем свойство
  if (value === "") {
    delete records[id][prop];
  } 
  // Условие 2: Свойство — не "tracks", и значение не пустое
  else if (prop !== "tracks") {
    records[id][prop] = value;
  } 
  // Условие 3: Свойство — "tracks", но у альбома еще нет такого массива
  else if (!records[id].hasOwnProperty("tracks")) {
    records[id]["tracks"] = [value];
  } 
  // Условие 4: Свойство — "tracks", и массив уже существует
  else {
    records[id]["tracks"].push(value);
  }

  // Функция всегда должна возвращать весь объект records
  return records;
}