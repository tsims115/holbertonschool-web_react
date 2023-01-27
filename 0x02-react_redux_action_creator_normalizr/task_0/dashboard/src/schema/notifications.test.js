import { StyleSheetTestUtils } from 'aphrodite';
import { getAllNotificationsByUser } from './notifications';

const id = '5debd764a7c57c7839d722e9';
const expectedResult = [
  {
    guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
    isRead: true,
    type: "urgent",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  },
  {
    guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
    isRead: false,
    type: "urgent",
    value:
      "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
  }
];

describe("getAllNotificationsByUser()", () => {
  it("returns correct data for given id", () => {
    expect(getAllNotificationsByUser(id)).toEqual(expect.arrayContaining(expectedResult));
  });
});
