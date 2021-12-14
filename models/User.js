const db = require("../config/db");

class User {
  constructor(user_id, user_name,password,email) {
    this.user_id = user_id;
    this.user_name = user_name;
    this.password = password;
    this.email = email;
  }

  
  save() {



    
    let sql = `
    INSERT INTO users(
      User_id ,
      User_name ,
      password,
      email
    )
    VALUES(
      '${this. User_id}',
      '${this.User_name}',
      '${this.password}',
      '${this.email}'
    )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM User;";
    return db.execute(sql);
    
  }

 
  static findById(id) {
    let sql = `SELECT * FROM user WHERE id = ${User_id};`;

    return db.execute(sql);
  }
}



module.exports = User;


