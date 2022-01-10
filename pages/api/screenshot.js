import { getScreenshot } from "../../utils/screenshot";

export default async (req, res) => {
  const url = req.query.url;

  const screenshot = await getScreenshot(url);

  res.statusCode = 200;
  res.setHeader("Content-Type", `image/png`);
  res.end(screenshot);
};
