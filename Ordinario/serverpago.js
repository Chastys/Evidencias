const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51RLvY42Y6uPdK5HhbBxNf7hJFr8swo1E4pZ48dnd5fwS9mv3c1mwcjNF3BKcDYaSHE3XScAeQBZWHJFCkaW0vKVc00r4L01fgo'); // Reemplaza con tu clave secreta de prueba
const path = require('path');

app.use(express.static('public'));
app.use(express.json());

// Endpoint para crear el PaymentIntent
app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 5000, // $50.00 USD
      currency: 'usd',
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.listen(4242, () => console.log('Servidor en http://localhost:4242'));
