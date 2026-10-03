function deepFreeze(obj) {
  Object.values(obj).forEach(value => {
    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  });
  return Object.freeze(obj);
}

const config = deepFreeze({ api: { baseUrl: 'https://x.com', retries: 3 }, debug: false })
console.log(Object.isFrozen(config.api)) // true
