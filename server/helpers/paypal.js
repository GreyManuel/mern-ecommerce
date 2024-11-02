const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AaRu0ZMrwJDczCSKFUwtl-0WynU-VkQddCDNfTuEzahes_TbwNC0gUHSLpKbPO36b14x81TtcY_Z42P3",
  client_secret: "EFrW1oQRNMKVOiWeNaom9zFCzB1BeEWI1LMjxRFcmLCJAo9zgFookDHVD5CQC631siPXULTP6Tpx1w1P",
});

module.exports = paypal;
