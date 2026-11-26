import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import GooglePage from '../pageobjects/google.page.js';

Given('I open the Google page', async () => {
    await GooglePage.open();
    await GooglePage.acceptCookiesIfPresent();
});

When('I search for {string}', async (searchText: string) => {
    await GooglePage.search(searchText);
});

Then('I should see the unusual traffic verification screen', async () => {
    await expect(GooglePage.unusualTrafficMessage).toHaveTextContaining('Our systems have detected unusual traffic');
});
