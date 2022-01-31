const Manager = require('../lib/Manager');

test ("get's Manager's office number", () => {
    const manager = new Manager("Bob", "22", "bob@bob.com", 2)
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test ("get's role of Manager", () => {
    const manager = new Manager("Bob", "22", "bob@bob.com", 2)
    
    expect(manager.getRole()).toEqual(expect.stringContaining("manager"));
});