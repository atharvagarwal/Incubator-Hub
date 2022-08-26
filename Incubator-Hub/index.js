const express = require("express");
const app = express();
const mongoose = require("mongoose");
const chatRoute = require("./routes/ChatRoute");
const messageRoute = require("./routes/MessageRoute");
const authRoute = require("./routes/AuthRoute");
const UserRoute = require('./routes/UserRouter');
const BlogRoute = require('./routes/BlogRoute')
const cors = require("cors");
const bodyParser = require('body-parser');

mongoose
  .connect("mongodb://localhost:27017/SIH_Chat")
  .then(() => {
    console.log("Connected to database..");
  })
  .catch((error) => {
    console.log("Something Went Wrong...");
  });

const PORT = 80 || 8080;

// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/chat", chatRoute);
app.use("/message", messageRoute);
app.use('/user', UserRoute)
app.use('/api', BlogRoute)


//Stripe Payment Gateway 

// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_51KoYjUSDZBjXIg74HFVs8kS7SMB0v1K8pbA6TCU7meJtTx9NQslculaw8oyBx1xR6r6CBRxQQC0qKJ91xR9eCTXk00B0MFg0qZ');

// The price ID passed from the client
//   const {priceId} = req.body;


  

  
  const YOUR_DOMAIN = 'http://localhost:3000';
  
  app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1LauMLSDZBjXIg74HJwd3dWU',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/blog`,
    });
  
    res.redirect(303, session.url);
  });
  

// Redirect to the URL returned on the Checkout Session.
// With express, you can redirect with:
//   res.redirect(303, session.url);


app.listen(PORT, () => {
  console.log(`Server Connected to http://localhost:${PORT}`);
});
