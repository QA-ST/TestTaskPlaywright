exports.AutocompletePage =

class AutocompletePage { 
    
    constructor(page) {
        this.page = page;
    }

    input_box_country = "#country";
    submit_button = "//button[text()='Submit']";
    country_list = "//div[@id='countryautocomplete-list']/div";

    async enterCountry(value) {
        await this.page.locator(this.input_box_country).fill(value);
    }

    async selectCountryFromList(countryName) {
    const countryOptionList = this.page.locator(this.country_list);
    const optionCount = await countryOptionList.count();

    console.log("Total Options: " + optionCount);

    for (let i = 0; i < optionCount; i++) {
        const option = countryOptionList.nth(i);
        const optionText = await option.innerText();

        console.log("Option Text: " + optionText);

        if (optionText === countryName) {
            await option.click();
            break;
        }
    }
    }

    async click_submit_button() {
        await this.page.locator(this.submit_button).click();
    }
}