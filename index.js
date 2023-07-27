const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://ssc.nic.in";
const cancelTokenSource = axios.CancelToken.source();

async function getData() {
  const timeoutId = setTimeout(() => {
    cancelTokenSource.cancel('Request timeout');
  }, 20000);

  try {
    const res = await axios.get(url, { cancelToken: cancelTokenSource.token });
    clearTimeout(timeoutId);
    console.log('data is ', res.data);

    const $ = cheerio.load(res.data);
    let firstLi = $(".scrollingNotifications_New.scrollbar ul li:first-child").text();
    firstLi = firstLi.toLowerCase();
    console.log(firstLi);

    if (firstLi.includes("steno")) {
      console.log("found");
      await axios({
        url: `https://formspree.io/f/{process.env.formspree_key}`,
        method: "post",
        headers: {
          Accept: "application/json",
        },
        data: {
          kyaHua: "wo aa gaya wo aa gaya",
        },
      });
    } else {
      console.log("not found");
    }
  } catch (error) {
    console.log('Error occurred\n', error);
    process.exit(1); 
  }
}

try {
  getData();
} catch (error) {
  console.log('Error in main function\n', error);
  process.exit(1); 
}
