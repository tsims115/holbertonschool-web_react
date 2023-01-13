const assert = require('assert');
import { getLatestNotification, getFooterCopy, getFullYear } from './utils.js'
describe('getFullYear', function () {
  it('should return 2023!', function () {
      assert.equal(getFullYear(), 2023);
  });
});
describe('getLatestNotification', function () {
  it('should return "<strong>Urgent requirement</strong> - complete by EOD"', function () {
      assert.equal(getLatestNotification(), '<strong>Urgent requirement</strong> - complete by EOD');
  });
});
describe('getFooterCopy', function () {
  it('true should return "Holberton School"', function () {
      assert.equal(getFooterCopy(true), "Holberton School");
  });
  it('false should return "Holberton School main dashboard"', function () {
      assert.equal(getFooterCopy(false), "Holberton School main dashboard");
  });
});
