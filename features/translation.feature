Feature: Translation
  Scenario: Translate from source language to target language
    Given user is in main page
    When user asked to translate "Hello" in english to bangla
    Then translated text should be "পৃথিবী"