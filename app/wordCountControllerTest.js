'use strict';

describe('myApp.wordCount module', function() {
    var q, scope;

    var wordCountController;
    var createWordCountController;

    beforeEach(module('myApp.wordCount'));

    beforeEach(inject(function ($rootScope, $q) {
        scope = $rootScope.$new();
        q = $q;
    }));

    beforeEach(function () {
        createWordCountController = function () {
            inject(function ($controller) {
                wordCountController = $controller("WordCountController", {});
            });
        };
    });

    describe('wordCount controller', function(){

        it('constructor test', function() {
            //Arrange
            var expectedTotalWordCount = 0;
            var expectedInputSentence = "";

            //Act
            createWordCountController();

            //Assert
            expect(wordCountController).toBeDefined();
            expect(wordCountController.totalWordCount).toEqual(expectedTotalWordCount);
            expect(wordCountController.inputSentence).toEqual(expectedInputSentence);
        });

        it('calculateWordCount test', function() {
            //Arrange
            var expectedTotalCount = 14;
            createWordCountController();
            wordCountController.inputSentence = "This is a test case to check the number of words in a sentence.";

            //Act
            wordCountController.calculateWordCount();

            //Assert
            expect(wordCountController.totalWordCount).toEqual(expectedTotalCount);
        });

        it('calculateWordCount empty input test', function() {
            //Arrange
            var expectedTotalCount = 0;
            createWordCountController();
            wordCountController.inputSentence = "";

            //Act
            wordCountController.calculateWordCount();

            //Assert
            expect(wordCountController.totalWordCount).toEqual(expectedTotalCount);
        });

    });

});