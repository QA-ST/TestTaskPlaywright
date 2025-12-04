exports.WebInputPage =

class WebInputPage {  

    constructor(page) {
        this.page = page;
    }

    // Locators
    number_input_box = "//input[@id='input-number']";
    text_input_box = "//input[@id='input-text']";

    async enterNumberInput(value) {
        await this.page.locator(this.number_input_box).fill(value);
    }

    async enterTextInput(value) {
        await this.page.locator(this.text_input_box).fill(value);
    }   

}
