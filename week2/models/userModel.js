"use strict";
// const users = [
//   {
//     id: '1',
//     name: 'John Doe',
//     email: 'john@metropolia.fi',
//     password: '1234',
//   },
//   {
//     id: '2',
//     name: 'Jane Doez',
//     email: 'jane@metropolia.fi',
//     password: 'qwer',
//   },
// ];

// fake database: ****************
const users = [
  {
    user_id: 1,
    name: "Foo Bar",
    email: "foo@bar.fi",
    password: "foobar"
  },
  {
    user_id: 2,
    name: "Bar Foo",
    email: "bar@foo.fi",
    password: "barfoo"
  }
];

const getUserLogin = params => users.filter(item => item.email === params);

module.exports = {
  users,
  getUserLogin
};
