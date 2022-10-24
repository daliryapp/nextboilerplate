module.exports = {
  '*': 'pretty-quick  --staged',
  '**/*.(ts)?(x)': () => `yarn type-check`,
  '**/*.(ts|js)?(x)': () => `yarn lint`,
}
