Feature: Translation
  Scenario: Translate from source language to target language
    Given translate from 'english' to 'bengali' selected
    When 'Hello' is given to translate
    Then translated message should be 'ওহে'