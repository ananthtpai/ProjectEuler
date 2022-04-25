module.exports = {
  extensions: {
    ts: 'module',
  },
  files: ['src/**/test.ts'],
  nodeArguments: [
    '--loader=ts-node/esm',
    '--experimental-specifier-resolution=node',
  ],
}
