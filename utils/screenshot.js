import chromium from "chrome-aws-lambda";

export const getScreenshot = async (url) => {
  if (!url || !url.trim()) {
    res.json({
      status: "error",
      error: "Enter a valid URL",
    });

    return;
  }

  let browser = null;

  try {
    browser = await getBrowserInstance();
    let page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });
    const screenshot = await page.screenshot({
      type: "png",
    });
    // return the file!
    return screenshot;

    // upload this buffer on AWS S3
  } catch (error) {
    console.log(error);
    // return callback(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
};

export const getBrowserInstance = async () => {
  const executablePath = await chromium.executablePath;

  if (!executablePath) {
    // running locally
    const puppeteer = require("puppeteer");
    return puppeteer.launch({
      args: chromium.args,
      headless: true,
      defaultViewport: {
        width: 1280,
        height: 720,
      },
      ignoreHTTPSErrors: true,
    });
  }

  return chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: {
      width: 1280,
      height: 720,
    },
    executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });
};
