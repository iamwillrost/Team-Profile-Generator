const Employee = require('../lib/Employee')

test('creates a employee object', () => {
    const employee = new Employee('bob', '1', 'bob@email.com');

    expect(employee.name).toBe('bob');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('bob@email.com');
});

test("gets emplyee's name", () => {
    const employee = new Employee('bob', '1', 'bob@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining('bob'));
});

test("gets employee's id", () => {
    const employee = new Employee('bob', '1', 'bob@email.com');

    expect(employee.getId()).toEqual(expect.stringContaining('1'));
});

test("gets's employee's email", () => {
    const employee = new Employee('bob', '1', 'bob@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('bob@email.com'));
});

test ("get's role of Employee", () => {
    const employee = new Employee('bob', '1', 'bob@email.com');
    
    expect(employee.getRole()).toEqual(expect.stringContaining("employee"));
});