const { browser } = require("@wdio/globals");

class BasePage {
  async open(path = "/") {
    await browser.url(path);
  }
  async getPageUrl() {
    return browser.getUrl();
  }
}
module.exports = BasePage;
