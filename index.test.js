const applications = require('./index');

test(`applications.offset(document.body); // {top: 0, left: 0}`, () => {
    expect(applications.offset(document.body)).toEqual({top: 0, left: 0});
});
