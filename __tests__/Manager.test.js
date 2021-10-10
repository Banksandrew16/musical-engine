// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Andrew', 96, 'Banksandrew16@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Andrew', 96, 'Banksandrew16@gmail');

    expect(manager.getRole()).toEqual("Manager");
}); 