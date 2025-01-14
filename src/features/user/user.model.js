export default class UserModel {
  constructor(name, email, password, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.id = id;
  }

  static signUp(name, email, password) {
    try {
      const newUser = new UserModel(name, email, password, users.length + 1);
      users.push(newUser);
      return newUser;
    } catch (e) {
      throw new Error("Something went wrong", e);
    }
  }

  static signIn(email, password) {
    try {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      return user;
    } catch (e) {
      throw new Error("Something went wrong", e);
    }
  }

  static getAll() {
    return users;
  }
}

var users = [
  {
    id: 1,
    name: "Seller User",
    email: "seller@ecom.com",
    password: "Password1",
  },
];
