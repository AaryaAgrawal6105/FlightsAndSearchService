'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports' , [
    {
    name : 'kempagoda International airport' ,
    cityId : 7 ,
    createdAt : new Date(),
    updatedAt : new Date()
   },
   {
    name : 'Mysuru International airport' ,
    cityId : 7 ,
    createdAt : new Date(),
    updatedAt : new Date()
   },
   {
    name : 'Mangaluru International airport' ,
    cityId : 7 ,
    createdAt : new Date(),
    updatedAt : new Date()
   },
   {
    name : 'Indira Gandhi International airport' ,
    cityId : 9 ,
    createdAt : new Date(),
    updatedAt : new Date()
   },
  ] , {})
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
