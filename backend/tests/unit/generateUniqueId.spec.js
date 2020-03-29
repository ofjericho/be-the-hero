const generateUniqeId = require('../../src/utils/generateUniqueId');


describe('Generate Unique ID', () => {

  it('should gerenate an unique ID', () => {

    const id = generateUniqeId();

    expect(id).toHaveLength(8);

  });

});