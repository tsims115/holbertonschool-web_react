const assert = require('assert');
import { getLatestNotification, getFooterCopy, getFullYear } from './utils.js'
describe('getFullYear', function () {
  it('should return 2023!', function () {
      expect(getFullYear()).toEqual(2023);
  });
});
describe('getLatestNotification', function () {
  it('should return "<strong>Urgent requirement</strong> - complete by EOD"', function () {
      expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
describe('getFooterCopy', function () {
  it('true should return "Holberton School"', function () {
      expect(getFooterCopy(true)).toEqual("Holberton School");
  });
  it('false should return "Holberton School main dashboard"', function () {
      expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
  });
});
