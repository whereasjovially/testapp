# testapp

This is a app for test task

## Demo

Check out the live demo at: [testapp.vercel.app](https://testapp.vercel.app)

## Features

- 🔄 **Connect Wallet**: Users can connect their wallet to this app.
- ⚡ **Check validity of address**: Uses can check the validity the address by typing it.

## Getting Started

To get started with the running the app locally on your machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/whereasjovially/testapp.git
   cd testapp
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add the following environment variables:

   ```bash
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID

   NEXT_PUBLIC_ENABLE_TESTNETS=true // Optional: Enable testnets
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.
