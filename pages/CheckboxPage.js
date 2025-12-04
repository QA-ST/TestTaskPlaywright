exports.CheckboxPage =

class CheckboxPage {

    constructor(page) {
        this.page = page;
    }   

    checkbox1 = "#checkbox1";
    checkbox2 = "#checkbox2";

    async checkCheckbox1() {
        await this.page.locator(this.checkbox1).check();
    }

    async uncheckCheckbox2() {
        await this.page.locator(this.checkbox2).uncheck();
    }
}