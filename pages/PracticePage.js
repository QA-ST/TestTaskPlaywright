exports.PracticePage =

class PracticePage {

    constructor(page) {
        this.page = page;
    }

    webInputs_page_link = "//a[text()='Web inputs']/following::a[1]";
    checkbox_page_link = "//a[text()='Check Boxes']/following::a[1]";
    autoComplete_page_link = "//a[text()='Autocomplete']/following::a[1]";

    async navigateToWebInputsPage() {
        await this.page.locator(this.webInputs_page_link).click();
    }

    async navigateToCheckboxPage() {
        await this.page.locator(this.checkbox_page_link).click();
    }

    async navigateToAutoCompletePage() {
        await this.page.locator(this.autoComplete_page_link).click();
    }

    

}