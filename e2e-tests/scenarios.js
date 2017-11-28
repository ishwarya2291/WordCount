'use strict';

describe('my app', function() {

    it('should automatically redirect to /wordCount when location hash/fragment is empty', function() {
        //Arrange
        browser.get('index.html');

        //Act

        //Assert
        expect(browser.getLocationAbsUrl()).toMatch("/wordCount");
    });

    describe('wordCount', function() {

        beforeEach(function() {
            browser.get('index.html#!/wordCount');
        });

        it('should count number of words in the text area', function() {
            //Arrange
            var expectedInputTextArea = element(by.id("inputSentence"));
            var expectedSentence = "This is an example.";
            var expectedSubmitButton = element(by.id("submitButton"));
            var expectedTotalWordCountElement = element(by.id("totalWordCount"));
            var expectedTotalWordCount = "Total word count = 8";

            expectedInputTextArea.sendKeys(expectedSentence);

            //Act
            browser.actions().click(expectedSubmitButton).perform();

            //Assert
            expect(expectedTotalWordCountElement.getText()).toEqual(expectedTotalWordCount);

        });

    });


});
