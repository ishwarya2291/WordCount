'use strict';

describe('my app', function() {

    it('should automatically redirect to /wordCount by default', function() {
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
            var expectedTotalWordCount = "Total word count = 4";

            expectedInputTextArea.sendKeys(expectedSentence);

            //Act
            browser.actions().click(expectedSubmitButton).perform();

            //Assert
            expect(expectedTotalWordCountElement.getText()).toEqual(expectedTotalWordCount);

        });

        it('should give invalid css in text area if empty input is submitted', function() {
            //Arrange
            var expectedInputTextArea = element(by.id("inputSentence"));
            var expectedSubmitButton = element(by.id("submitButton"));
            var expectedTotalWordCountElement = element(by.id("totalWordCount"));
            var expectedTotalWordCount = "Total word count = 0";
            var expectedEmptySentence = "";
            var expectedInvalidCss = "ng-invalid";

            expectedInputTextArea.sendKeys(expectedEmptySentence);

            //Act
            browser.actions().click(expectedSubmitButton).perform();

            //Assert
            expect(expectedTotalWordCountElement.getText()).toEqual(expectedTotalWordCount);
            expect(expectedInputTextArea.getAttribute("class")).toContain(expectedInvalidCss);
        });
    });
});
