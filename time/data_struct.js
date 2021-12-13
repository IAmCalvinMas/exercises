
const user = {

  name: '',
  surname: '',
  birthday: new Date(),
  email: '',
  create: function () {},
  read: function () {},
  update: function() {},
  delete: function () {}
};


const goal = {

  title: '',
  wellness: '',
  date: new Date(),
  motivation: ''
};


const Task = function (title, date) {

  this.title = title;
  this.date = date;
}


const task = new Task();


