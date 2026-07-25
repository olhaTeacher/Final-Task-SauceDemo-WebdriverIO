const loginPage = require('../pageobjects/login.page')
const inventoryPage = require('../pageobjects/inventory.page')
const productPage = require('../pageobjects/product.page')

const data = require('../pagedata/product.data')
const log = require('../utils/logger')

describe('Dynamic Content', ()=> {
    beforeEach(async()=> {
        await loginPage.open()
        await loginPage.login(data.username, data.password)
    })
    it('UC-1 Product Details Verification', async ()=> {
        log.info(`Verify product: ${data.productName}`)
        const inventoryPrice = await inventoryPage.getProductPrice(data.productName)
        const inventoryDescription = await inventoryPage.getProductDescription(data.productName)
        await inventoryPage.openProduct(data.productName)
        await expect(await productPage.getPrice()).toEqual(inventoryPrice)
        await expect(await productPage.getDescription()).toEqual(inventoryDescription)
        await productPage.addToCart()
        await expect(await productPage.isRemoveButtonDisplayed()).toBe(true)
    })
    it('UC-2 Footer & Social Links', async ()=> {
        await inventoryPage.scrollToFooter()
        await expect(await inventoryPage.isFooterDisplayed()).toBe(true)
        await expect(inventoryPage.twitterLink).toBeExisting()
        await expect(inventoryPage.facebookLink).toBeExisting()
        await expect(inventoryPage.linkedinLink).toBeExisting()
        await expect(inventoryPage.twitterLink).toHaveAttribute('href', expect.stringContaining('twitter'))
        await expect(inventoryPage.facebookLink).toHaveAttribute('href', expect.stringContaining('facebook'))
        await expect(inventoryPage.linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin'))
    })
})