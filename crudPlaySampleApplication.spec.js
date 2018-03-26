module.exports = {
    'Create new computer': function (browser) {
        browser
            .url('http://computer-database.herokuapp.com/computers')
            .waitForElementVisible('#searchbox', 1000)
            .click('#add')
            .assert.elementPresent('#name')
            .setValue('#name', 'testValue')
            .setValue('#introduced', '2001-12-29')
            .setValue('#discontinued', '2017-12-29')
            .click('#company' option[value=5]')
            .click('#main > form:nth-child(2) > div > input')
            //This should be an end to end class called .e2e-save-button
            .waitForElementVisible('#searchbox', 1000)
            .assert.containsText(".alert-message", "Done! Computer test has been created")
            .end();
    },

    'Search functionality: find a computer': function (browser) {
        browser
            .url('http://computer-database.herokuapp.com/computers')
            .waitForElementVisible('#searchbox', 1000)
            .setValue('#searchbox', 'Kentucky Linux Athlon Testbed')
            .click('#searchsubmit')
            .click('//*[@id="main"]/table/tbody/tr[4]/td[1]/a')
            .waitForElementVisible('#name', 1000)
            .expect.element('#name').text.to.equal('Kentucky Linux Athlon Testbed')
            .end();
    },

    'Search functionality: edit a computer': function (browser) {
        browser
            .url('http://computer-database.herokuapp.com/computers')
            .waitForElementVisible('#searchbox', 1000)
            .setValue('#searchbox', 'ACE')
            .click('#searchsubmit')
            .click('//*[@id="main"]/table/tbody/tr[1]/td[1]/a')
            .waitForElementVisible('#name')
            .expect.element('#name').text.to.equal('ACE')
            .click('#company' option[value=5]')
            .click('#main > form:nth-child(2) > div > input')
            //This should be an end to end class called .e2e-save-button
            .waitForElementVisible('#searchbox', 1000)
            .expect.element('//*[@id="main"]/table/tbody/tr[1]/td[4]').text.to.equal('Tandy Corporation')
            .end();
    },

    'Search functionality: delete a computer': function (browser) {
        browser
            .url('http://computer-database.herokuapp.com/computers')
            .waitForElementVisible('#searchbox', 1000)
            .setValue('#searchbox', 'Kentucky Linux Athlon Testbed')
            .click('#searchsubmit')
            .click('//*[@id="main"]/table/tbody/tr[4]/td[1]/a')
            .expect.element('#name').text.to.equal('Kentucky Linux Athlon Testbed')
            .click('.danger')
            //This should be an end to end class called .e2e-delete-button
            .waitForElementVisible(".alert-message", "Done! Computer has been deleted")
            .end();
    },
};
