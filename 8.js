class HashMap {
    constructor() {
      this.map = {};
    }
  
    put(key, value) {
      const hash = key.toString().length % this.map.length;
      if (!this.map[hash]) {
        this.map[hash] = [];
      }
      this.map[hash].push([key, value]);
    }  
    get(key) {
      const hash = key.toString().length % this.map.length;
      const tmp = this.map[hash];
      if (tmp) {
        for (const [k, v] of tmp) {
          if (k === key) {
            return v;
          }
        }
      }
      return null;
    }
  
    remove(key) {
      const hash = key.toString().length % this.map.length;
      const tmp = this.map[hash];
      if (tmp) {
        for (let i = 0; i < tmp.length; i++) {
          if (tmp[i][0] === key) {
            tmp.splice(i, 1);
            return true;
          }
        }
      }
      return false;
    }
  }
  const question8 = new HashMap();
  const items = [
    ["name", "Vansh Mittal"],
    ["age", 21],
    ["city", "Dehradun"],
  ];
  for (const item of items) {
    const [key, value] = item;
    question8.put(key, value);
  }
  const name = question8.get("name");
  console.log("Name:", name);
  const removedAge = question8.remove("age");
  if (removedAge) {
    console.log("Age removed successfully.");
  } else {
    console.log("Age not found in the map.");
  }
  