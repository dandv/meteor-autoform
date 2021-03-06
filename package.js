Package.describe({
  name: "aldeed:autoform",
  summary: "Easily create forms with automatic insert and update, and automatic reactive validation.",
  git: "https://github.com/aldeed/meteor-autoform.git",
  version: "4.0.0-rc2"
});

Package.on_use(function(api) {
  // Dependencies

  // 0.9.0+
  if (api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.3');
    // common
    api.use('aldeed:simple-schema@1.0.0');
    api.use('check');
    // client
    api.use(['livedata', 'underscore', 'deps', 'templating', 'ui', 'blaze'], 'client');
    api.use('mrt:moment@2.6.0', 'client');
    api.use('mrt:moment-timezone@0.2.1', 'client', {weak: true});
    api.use(['aldeed:collection2@2.0.0', 'reload'], 'client', {weak: true});
    // Imply SS to make sure SimpleSchema object is available to app
    api.imply('aldeed:simple-schema');
  }
  // Pre-0.9.0
  else {
    api.use(['simple-schema', 'check']);
    api.use(['moment', 'livedata', 'underscore', 'deps', 'templating', 'handlebars', 'ui'], 'client');
    api.use(['reload'], ['client'], {weak: true});
    api.use(['collection2'], ['client'], {weak: true});
    // Imply SS to make sure SimpleSchema object is available to app
    api.imply('simple-schema');
  }  
  
  // Exports
  api.export('AutoForm', 'client');
  api.export('Utility', 'client', {testOnly: true});
  // Files
  api.add_files(['autoform-common.js']);
  api.add_files([
    // utilities and general init
    'utility.js',
    'form-preserve.js',
    'autoform-hooks.js',
    'autoform-formdata.js',
    'autoform-arrays.js',
    'autoform.js',
    // global helpers
    'autoform-helpers.js',
    // validation
    'autoform-validation.js',
    // inputs
    'autoform-inputs.js',
    // public API
    'autoform-api.js',
    // input types
    'inputTypes/boolean-checkbox/boolean-checkbox.html',
    'inputTypes/boolean-checkbox/boolean-checkbox.js',
    'inputTypes/boolean-radios/boolean-radios.html',
    'inputTypes/boolean-radios/boolean-radios.js',
    'inputTypes/boolean-select/boolean-select.html',
    'inputTypes/boolean-select/boolean-select.js',
    'inputTypes/button/button.html',
    'inputTypes/button/button.js',
    'inputTypes/color/color.html',
    'inputTypes/color/color.js',
    'inputTypes/contenteditable/contenteditable.html',
    'inputTypes/contenteditable/contenteditable.js',
    'inputTypes/date/date.html',
    'inputTypes/date/date.js',
    'inputTypes/datetime/datetime.html',
    'inputTypes/datetime/datetime.js',
    'inputTypes/datetime-local/datetime-local.html',
    'inputTypes/datetime-local/datetime-local.js',
    'inputTypes/email/email.html',
    'inputTypes/email/email.js',
    'inputTypes/file/file.html',
    'inputTypes/file/file.js',
    'inputTypes/hidden/hidden.html',
    'inputTypes/hidden/hidden.js',
    'inputTypes/image/image.html',
    'inputTypes/image/image.js',
    'inputTypes/month/month.html',
    'inputTypes/month/month.js',
    'inputTypes/number/number.html',
    'inputTypes/number/number.js',
    'inputTypes/password/password.html',
    'inputTypes/password/password.js',
    'inputTypes/radio/radio.html',
    'inputTypes/radio/radio.js',
    'inputTypes/range/range.html',
    'inputTypes/range/range.js',
    'inputTypes/reset/reset.html',
    'inputTypes/reset/reset.js',
    'inputTypes/search/search.html',
    'inputTypes/search/search.js',
    'inputTypes/select/select.html',
    'inputTypes/select/select.js',
    'inputTypes/select-checkbox/select-checkbox.html',
    'inputTypes/select-checkbox/select-checkbox.js',
    'inputTypes/select-multiple/select-multiple.html',
    'inputTypes/select-multiple/select-multiple.js',
    'inputTypes/select-radio/select-radio.html',
    'inputTypes/select-radio/select-radio.js',
    'inputTypes/submit/submit.html',
    'inputTypes/submit/submit.js',
    'inputTypes/tel/tel.html',
    'inputTypes/tel/tel.js',
    'inputTypes/text/text.html',
    'inputTypes/text/text.js',
    'inputTypes/textarea/textarea.html',
    'inputTypes/textarea/textarea.js',
    'inputTypes/time/time.html',
    'inputTypes/time/time.js',
    'inputTypes/url/url.html',
    'inputTypes/url/url.js',
    'inputTypes/week/week.html',
    'inputTypes/week/week.js',
    // components that render a form
    'components/autoForm/autoForm.html',
    'components/autoForm/autoForm.js',
    'components/quickForm/quickForm.html',
    'components/quickForm/quickForm.js',
    // components that render controls within a form
    'components/afArrayField/afArrayField.html',
    'components/afArrayField/afArrayField.js',
    'components/afEachArrayItem/afEachArrayItem.html',
    'components/afEachArrayItem/afEachArrayItem.js',
    'components/afFieldInput/afFieldInput.html',
    'components/afFieldInput/afFieldInput.js',
    'components/afFieldSelect/afFieldSelect.html',
    'components/afFieldSelect/afFieldSelect.js',
    'components/afFormGroup/afFormGroup.html',
    'components/afFormGroup/afFormGroup.js',
    'components/afObjectField/afObjectField.html',
    'components/afQuickField/afQuickField.html',
    'components/afQuickField/afQuickField.js',
    'components/afQuickFields/afQuickFields.html',
    'components/afQuickFields/afQuickFields.js',
    // event handling
    'autoform-events.js',
    // bootstrap3 Template
    'templates/bootstrap3/bootstrap3.html',
    'templates/bootstrap3/bootstrap3.js',
    // bootstrap3-horizontal Template
    'templates/bootstrap3-horizontal/bootstrap3-horizontal.html',
    'templates/bootstrap3-horizontal/bootstrap3-horizontal.js',
    'templates/bootstrap3-horizontal/bootstrap3-horizontal.css',
    // plain Template
    'templates/plain/plain.html',
    'templates/plain/plain.js',
    // plain-fieldset Template
    'templates/plain-fieldset/plain-fieldset.html',
    'templates/plain-fieldset/plain-fieldset.js',
  ], 'client');
});

Package.on_test(function (api) {
  if (api.versionsFrom) {
    api.use(['aldeed:autoform', 'tinytest', 'underscore']);
  } else {
    api.use(['autoform', 'tinytest', 'underscore']);
  }
  
  api.add_files(['tests/utility-tests.js', 'tests/autoform-tests.js']);
});
