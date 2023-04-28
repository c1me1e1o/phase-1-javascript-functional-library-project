function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i], Object.keys(collection)[i], collection);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const resultArray = [];
    if (typeof collection === 'object') {
      Object.keys(collection).forEach(key => {
        resultArray.push(callback(collection[key], key, collection));
      });
    } else {
      for (let index = 0; index < collection.length; index++) {
          resultArray.push(callback(collection[index], index, collection));
      }
    }
    return resultArray;
  }

  function myReduce(obj, callback, acc) {
    let keys = Object.keys(obj);
    let start = 0;
    if (typeof acc === 'undefined') {
      acc = obj[keys[0]];
      start = 1;
    }
    for (let i = start; i < keys.length; i++) {
      acc = callback(acc, obj[keys[i]], obj);
    }
    return acc;
  }
  
  const myFind = (collection, predicate) => {
    const values = Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        return values[i];
      }
    }
    return undefined;
  }

  function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {
      return collection.filter(predicate);
    } else {
      return Object.values(collection).filter(predicate);
    }
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  function myFirst(arr, n) {
    if (n === undefined) {
      return arr[0];
    } else {
      return arr.slice(0, n);
    }
  }

  function myLast(array, n) {
    if (n === undefined) {
      return array.slice(-1)[0];
    } else {
      return array.slice(-n);
    }
  }
  
  function myKeys(obj) {
    return Object.keys(obj).filter(key => obj[key]);
  }
  
  function myValues(obj) {
    return Object.values(obj);
  }