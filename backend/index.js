const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Content Security Policy header (fixes font load issue)
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; font-src 'self' data:; script-src 'self' 'unsafe-inline';"
  );
  next();
});

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// MongoDB connection
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Aaditya:Aaditya_1@school.i55v9.mongodb.net/?retryWrites=true&w=majority&appName=school";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const bookCollection = client.db('bookInventory').collection('books');

    // POST: Upload a book
    app.post('/upload-book', async (req, res) => {
      const data = req.body;
      const result = await bookCollection.insertOne(data);
      res.send(result);
    });

    // GET: All books
    app.get('/all-books', async (req, res) => {
      const books = await bookCollection.find().toArray();
      res.send(books);
    });

    // PATCH: Update book by ID
    app.patch('/book/:id', async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = { $set: { ...updateBookData } };
      const result = await bookCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // DELETE: Delete book by ID
    app.delete('/book/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    });

    // GET: Filter books by category
    app.get('/category/:category', async (req, res) => {
      const query = req.query?.category ? { category: req.query.category } : {};
      const result = await bookCollection.find(query).toArray();
      res.send(result);
    });

    // GET: Single book by ID
    app.get('/book/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollection.findOne(filter);
      res.send(result);
    });

    // MongoDB connection check
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Connected to MongoDB!");
  } finally {
    // Don't close client in dev mode
  }
}

run().catch(console.dir);

// Start server
app.listen(3000, () => {
  console.log("🚀 Server is running on port 3000");
});