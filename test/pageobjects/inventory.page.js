const BasePage = require('./base.page')

class InventoryPage extends BasePage {

    //--------Dynamic product--------

    productTitle(productName){
        return $(`//a[.//div[text()='${productName}']]`)
    }

    productPrice(productName){
         return $(`//div[text()='${productName}']/ancestor::div[@class='inventory_item']//div[@class='inventory_item_price']`)
    }

    productDescription(productName){
        return $(`//div[text()='${productName}']/ancestor::div[@class='inventory_item']//div[@class='inventory_item_desc']`)
    }

    //--------Footer--------

    get footer(){
        return $('.footer')
    }
    get twitterLink(){
        return $('.social_twitter a')
    }
     get facebookLink(){
        return $('.social_facebook a')
    }
     get linkedinLink(){
        return $('.social_linkedin a')
    }

    //--------Methods--------

    async openProduct(productName){
        const product = this.productTitle(productName)
        await product.waitForDisplayed();
        await product.click()
    }
    async getProductPrice(productName){
        return await this.productPrice(productName).getText()
    }
    async getProductDescription(productName){
        return await this.productDescription(productName).getText()
    }
    async scrollToFooter() {
        await this.footer.scrollIntoView()
    }
    async isFooterDisplayed(){
        return await this.footer.isDisplayed()
    }

}
module.exports = new InventoryPage()
