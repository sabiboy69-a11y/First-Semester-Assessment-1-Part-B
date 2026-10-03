 for (const key of Object.keys(oldObj)) {
    if (!newKeys.has(key)) {
      removed[key] = oldObj[key];
    }
  }

  for (const key of Object.keys(oldObj)) {
    if (newKeys.has(key) && oldObj[key]!== newObj[key]) {
      changed[key] = { from: oldObj[key], to: newObj[key] };
    }
  }

  return { added, removed, changed };
}

console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
))
// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' }, changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }
