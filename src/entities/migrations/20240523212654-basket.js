module.exports = {
  async up(db, client) {
    db.createCollection("basket");
  },

  async down(db, client) {
    db.dropCollection("basket");
  },
};
