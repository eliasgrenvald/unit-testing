module.exports = {
  name: 'materials',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/materials',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
