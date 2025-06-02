function deepOmit(obj, keysToOmit) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    let changed = false;
    const newArr = obj.map((item, index) => {
      const newItem = deepOmit(item, keysToOmit);
      if (newItem !== item) changed = true;
      return newItem;
    });
    return changed ? newArr : obj;
  }

  let changed = false;
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (keysToOmit.includes(key)) {
      changed = true;
      continue;
    }

    const newValue = deepOmit(value, keysToOmit);
    if (newValue !== value) changed = true;

    result[key] = newValue;
  }

  // If no keys were removed or changed, return original object to preserve reference
  return changed ? result : obj;
}

export { deepOmit };
