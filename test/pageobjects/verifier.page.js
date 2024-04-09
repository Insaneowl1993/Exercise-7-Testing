const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VerifierPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputNumber () {
        return $('#number');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get resultOutput () {
        return $('#result')
    }
    
}

module.exports = new VerifierPage();
