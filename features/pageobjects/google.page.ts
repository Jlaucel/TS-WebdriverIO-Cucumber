import { $, browser } from '@wdio/globals';

class GooglePage {
    public get cookieButton () {
        return $('button=Aceptar todo');
    }

    public get searchInput () {
        return $('[name="q"]');
    }

    public get unusualTrafficMessage () {
        return $('body');
    }

    public async open () {
        await browser.url('https://www.google.com');
    }

    public async acceptCookiesIfPresent () {
        if (await this.cookieButton.isExisting()) {
            await this.cookieButton.click();
        }
    }

    public async search (text: string) {
        await this.searchInput.waitForDisplayed();
        await this.searchInput.setValue(text);
        await browser.keys('Enter');
    }
}

export default new GooglePage();
