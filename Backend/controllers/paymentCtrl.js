const expressAsyncHandler = require("express-async-handler");

// var req = unirest("GET", "https://sandbox.safaricom.co.ke/oauth/v1/generate");

// req.query({
//   grant_type: "client_credentials",
// });

// req.headers({
//   Authorization:
//     "Basic SWZPREdqdkdYM0FjWkFTcTdSa1RWZ2FTSklNY001RGQ6WUp4ZVcxMTZaV0dGNFIzaA==",
// });

// req.end((res) => {
//   if (res.error) throw new Error(res.error);
//   console.log(res.body);
// });



const checkout = async (req, res) => {
   const { mobile, amount } = req.body;

  const order = await instance.orders.create(mobile, amount);
  res.json({ success: true, order });
};



module.exports = {
  checkout,
};
