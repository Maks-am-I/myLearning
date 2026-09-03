/**
 * In this lab, you will build a small pantry management program using basic JavaScript concepts like arrays, objects, loops, and conditionals.

You will simulate receiving a shipment of pantry items, deciding what to do with each item, and organizing the results for storage.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

The rawData array contains pipe-separated strings with the format sku|name|qty|expires|zone, where zone is optional.

User Stories:

You should implement a parseShipment(rawData) function that takes an array of strings and returns an array of objects with { sku, name, qty, expires, zone } properties.

Duplicate sku values in the shipment should be ignored.
When the zone segment is not provided, it should default to "general".
The qty value should be converted to a number.
You should implement a planRestock(pantry, shipment) function that compares the current pantry with the incoming shipment and returns an array of actions in the form { type, item }, where type is one of "restock", "discard", or "donate", and item is the parsed shipment object.

The pantry parameter is an array of objects with the same shape as a parsed shipment item ({ sku, name, qty, expires, zone }).

If a shipment item has a qty of 0 or less, the action type should be "discard", regardless of whether the item exists in the pantry.
Otherwise, if the shipment item's sku already exists in the pantry, the action type should be "restock".
Otherwise (the shipment item's sku does not exist in the pantry), the action type should be "donate".
You should implement a groupByZone(actions) function that groups the actions into storage zones based on each item's zone property. The function should return an object where each key is a zone name and the value is an array of actions belonging to that zone. For example, if actions contain items with zones "fridge" and "pantry", the result should be { fridge: [...], pantry: [...] }.

You should implement a clonePantry(pantry) function that returns a deep copy of the pantry so planning changes do not affect the original list. A deep copy means creating a new array with new objects, so modifying the copy does not change the original pantry.

You should use all of the functions together to process a shipment and log the final grouped result object to the console.
 */

const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const listObj = [];
  const newRawData = [];
  const lengthRawData = rawData.length;
  const listSku = [];

  for(let i = 0; i < lengthRawData; i++) {
    newRawData.push(rawData[i].split('|'));
  }

  for(let obj of newRawData) {
    if(listSku.includes(obj[0])) {
      continue;
    } else {
      listSku.push(obj[0]);
    }

    listObj.push(
      {
        sku: obj[0] || undefined,
        name: obj[1] || undefined,
        qty: +obj[2] ||undefined,
        expires: obj[3] || undefined,
        zone: obj[4] || 'general',
      }
    );
  }

  return listObj;
}

function planRestock(pantry, shipment) {
  // Создаем массив для хранения действий
  var actions = [];
  
  // Проходим по каждому товару в поставке
  for (var i = 0; i < shipment.length; i++) {
    var currentItem = shipment[i];
    var actionType = "";
    
    // Проверяем условие 1: количество меньше или равно 0
    if (currentItem.qty <= 0) {
      actionType = "discard";
    } else {
      // Проверяем условие 2: существует ли такой SKU в кладовой
      var skuExists = false;
      
      // Проходим по всем товарам в кладовой
      for (var j = 0; j < pantry.length; j++) {
        if (pantry[j].sku === currentItem.sku) {
          skuExists = true;
          break; // Нашли совпадение, выходим из цикла
        }
      }
      
      // Определяем действие на основе наличия SKU
      if (skuExists === true) {
        actionType = "restock";
      } else {
        actionType = "donate";
      }
    }
    
    // Создаем объект действия
    var action = {
      type: actionType,
      item: currentItem
    };
    
    // Добавляем действие в массив
    actions.push(action);
  }
  
  // Возвращаем массив действий
  return actions;
}

function groupByZone(actions) {
  // Создаем пустой объект для хранения групп
  var grouped = {};
  
  // Проходим по каждому действию
  for (var i = 0; i < actions.length; i++) {
    var currentAction = actions[i];
    var zone = currentAction.item.zone;
    
    // Проверяем, существует ли уже такая зона в объекте
    if (grouped[zone] === undefined) {
      // Если зоны нет, создаем новый массив для этой зоны
      grouped[zone] = [];
    }
    
    // Добавляем текущее действие в массив соответствующей зоны
    grouped[zone].push(currentAction);
  }
  
  // Возвращаем объект с группами
  return grouped;
}

function clonePantry(pantry) {
  // Создаем новый пустой массив
  var clonedPantry = [];
  
  // Проходим по каждому элементу кладовой
  for (var i = 0; i < pantry.length; i++) {
    var originalItem = pantry[i];
    
    // Создаем новый объект с теми же свойствами
    var clonedItem = {
      sku: originalItem.sku,
      name: originalItem.name,
      qty: originalItem.qty,
      expires: originalItem.expires,
      zone: originalItem.zone
    };
    
    // Добавляем копию в новый массив
    clonedPantry.push(clonedItem);
  }
  
  // Возвращаем новый массив с новыми объектами
  return clonedPantry;
}

const pantryCopy = clonePantry(pantry);
const shipment = parseShipment(rawData);
const actions = planRestock(pantryCopy, shipment);
const groupedByZone = groupByZone(actions);

console.log(groupedByZone);
