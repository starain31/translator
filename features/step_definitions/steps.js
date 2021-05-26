const {Then, When, Given} = require('@cucumber/cucumber');
const {assertThat, is} = require('hamjest');

function create_translator({source_language, target_language}) {
    return Object.freeze({
        translate: function (source_text) {
            return 'ওহে';
        }
    });
}

Given('translate from {string} to {string} selected', function (source_language, target_language) {
    this.translator = create_translator({source_language, target_language});
});

When('{string} is given to translate', function (source_text) {
    this.translated_text = this.translator.translate(source_text);
});

Then('translated message should be {string}', function (target_text) {
    assertThat(this.translated_text, is(target_text));
});