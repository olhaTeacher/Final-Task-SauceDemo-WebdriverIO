const BasePage = require('./base.page')

class ProductPage extends BasePage {
    //--------Product Details--------

    get productName(){
        return $('.inventory_details_name')
    }
    get productDescription(){
        return $('.inventory_details_desc')
    }
    get productPrice(){
        return $('.inventory_details_price')
    }
    get addToCartButton(){
        return $('button[id^="add-to-cart"]')
    }
    get removeButton(){
        return $('button[id^="remove"]')
    }
    //--------Methods--------

    async getPrice(){
        return await this.productPrice.getText()
    }
    async getDescription(){
        return await this.productDescription.getText()
    }
    async addToCart(){
        await this.addToCartButton.click()
    }
    async isRemoveButtonDisplayed() {
    return await this.removeButton.isDisplayed();
}
}

module.exports = new ProductPage()