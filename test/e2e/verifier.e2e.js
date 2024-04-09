const { expect, assert } = require('@wdio/globals')
const VerifierPage = require('../pageobjects/verifier.page')

describe('My Prime Verifier application', () => {
    it('should correctly veriffy prime numbers', async () => {
        await VerifierPage.open("") // uses page.js open() to open the page
        const inputNumber = await VerifierPage.inputNumber 

        await inputNumber.setValue(2)
        console.log(await inputNumber.getValue())

        const btnSubmit = await VerifierPage.btnSubmit
        await btnSubmit.click()

        const resultOutput = await VerifierPage.resultOutput
        const text = await resultOutput.getText()
        expect(text).toBe("true") 
        // TODO: Locate the input field and button, set the value, click the button, and verify the result
    })
})

