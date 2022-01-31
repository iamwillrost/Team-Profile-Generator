const Intern = require('../lib/Intern');

test("get Intern's school name", () => {
    const intern = new Intern('bob', '02', 'bob@bob.com', 'carleton');

    expect(intern.school).toEqual(expect.any(String));
    })

test ("get's role of Intern", () => {
    const intern = new Intern('bob', '02', 'bob@bob.com', 'carleton');
    
    expect(intern.getRole()).toEqual(expect.stringContaining("intern"));
});