# Typeform Integration

## Environment variables and credentials setup

These plugins use two environmental variables.

- `TYPEFORM_TOKEN` - This is the API key for the Typeform API. You can find it in the [Typeform Developer Portal](https://developer.typeform.com/).
- `TYPEFORM_BASE_URL` - This is the base URL for the Typeform API. You can alter it if you want. The default is `https://api.typeform.com/`.
- `TYPEFORM_MANUALLY_CREATED_FORM_ID` - This is the manually created form ID. You can create a form manually in the Typeform dashboard and use the form ID here. Note that this isn't required if you are not running the tests.

### Note about tests

There are two files: [Lookup_Responses test](./Lookup_Responses/script.bun.test.ts) and [List_Responses test](./List_Responses/script.bun.test.ts). These tests are using the `TYPEFORM_MANUALLY_CREATED_FORM_ID` environmental variable. If you are not running the tests, you don't need to set this variable. But if you are, then do follow the instructions mentioned in each of the test file to make sure the tests pass.
