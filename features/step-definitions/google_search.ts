import { Given, When, Then } from '@cucumber/cucumber';
import { expect, $, browser } from '@wdio/globals'

console.log('--- Cargando Step Definitions ---');

Given('que abro la página de Google', async () => {
    console.log('Ejecutando: Abrir Google');
    await browser.url('https://www.google.com');
    
    const cookieButton = await $('button=Aceptar todo');
    if (await cookieButton.isExisting()) {
        await cookieButton.click();
    }
});

When('busco {string}', async (searchText: string) => {
    console.log(`Ejecutando: Buscar ${searchText}`);
    const input = await $('[name="q"]');
    await input.waitForDisplayed();
    await input.setValue(searchText);
    await browser.keys('Enter');
});

Then('debo ver la pantalla de verificación de tráfico inusual', async () => {
    console.log('Ejecutando: Validar tráfico inusual');
    const avisoElement = await $('*=Our systems have detected unusual traffic');
    await expect(avisoElement).toBeDisplayed();
});
