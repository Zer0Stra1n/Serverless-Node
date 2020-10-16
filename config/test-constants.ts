/* eslint-disable no-invalid-this */
/**
 * Fake DB Connection
 */
export class DBFake {
  data = {};
  /**
   * Fake DB Query
   * @param {String} arg A DB Query
   * @return {Promise} any data specified on the data attribute
   */
  query = jest.fn((arg) => {
    return Promise.resolve({
      records: this.data,
    });
  });
}
