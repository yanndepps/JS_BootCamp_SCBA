const userData = {
  username: 'depps',
  title: 'javascript dev',
  getBio() {
    console.log(`user ${ this.username } is a ${ this.title }`);
  },
  askToFriend() {
    setTimeout(() => {
      console.log(`would you like to friend ${this.username} ?`);
    }, 2000);
  }
};

console.log(userData.askToFriend());
