import { test, expect, chromium } from '@playwright/test';
import { PracticePage } from '../pages/PracticePage.js';
import { WebInputPage } from '../pages/WebInputPage.js';
import { CheckboxPage } from '../pages/CheckboxPage.js';
import { AutocompletePage } from '../pages/AutocompletePage.js';


let browser;
let context;
let page;

test.beforeAll('start setup and navigated to url', async () => {

    browser = await chromium.launch();
    context = await browser.newContext();

    await context.route('**/*', (route) => {
        const url = route.request().url();

        const blockedResources = [
            'googlesyndication.com',
            'googleads.g.doubleclick.net',
            'doubleclick.net',
            'adservice.google.com',
            'adservice.google.co',
            'g.doubleclick.net'
        ];

        if (blockedResources.some(domain => url.includes(domain))) {
            console.log('Blocked:', url);
            return route.abort();
        }

        return route.continue();
    });

    page = await context.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.setExtraHTTPHeaders({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
    });

    await page.goto('https://practice.expandtesting.com/');
    await page.waitForLoadState();
});

test.afterAll(async () => {
    await page.close();
});

test('Verify input box functionality', async () => {

    const practice_page = new PracticePage(page);
    const inputs_page = new WebInputPage(page);

    // navigate to Web Inputs page
    await practice_page.navigateToWebInputsPage();

    await page.waitForLoadState();

    const input_value_number = '12345';
    const input_value_text = 'ST QA'; 
    
    if(await page.locator(inputs_page.number_input_box).isEditable())
    {
        await inputs_page.enterNumberInput(input_value_number);
    }

    if(await page.locator(inputs_page.text_input_box).isEditable())
    {   
    await inputs_page.enterTextInput(input_value_text);
    }

    // assertions
    await expect(await page.locator(inputs_page.number_input_box)).toHaveValue(input_value_number);
    await expect(await page.locator(inputs_page.text_input_box)).toHaveValue(input_value_text);

    await page.goBack();

});


test('Verify checkbox functionality', async () => {

    const practice_page = new PracticePage(page);
    const checkbox_page = new CheckboxPage(page);


    await practice_page.navigateToCheckboxPage();
    await page.waitForLoadState();

    await checkbox_page.checkCheckbox1();
    await expect(await page.locator(checkbox_page.checkbox1)).toBeChecked();

    await checkbox_page.uncheckCheckbox2();
    await expect(await page.locator(checkbox_page.checkbox2)).not.toBeChecked();

    await page.goBack();
});


test('Verify autocomplete functionality', async () => {

    const practice_page = new PracticePage(page);
    const autocomplete_page = new AutocompletePage(page);


    await practice_page.navigateToAutoCompletePage();
    await page.waitForLoadState();

    const country_to_select = "Hong Kong";

    await autocomplete_page.enterCountry("H");

    await page.waitForTimeout(2000);
    await autocomplete_page.selectCountryFromList(country_to_select);

    // assertion
    await expect(await page.locator(autocomplete_page.input_box_country)).toHaveValue(country_to_select);

    await autocomplete_page.click_submit_button();

    await page.waitForTimeout(5000);

});