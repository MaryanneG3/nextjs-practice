## spline

### packages and libraries required to use Spline

    npm install @splinetool/react-spline

### how to embed spline model

import Spline from '@splinetool/react-spline';

export default function Home(){return <Spline scene=enter scene from spline /> }

## next.js App Router API conventions

### What is the App Router?

The App Router in Next.js is a system that helps you define and manage the routes (URLs) in your application. It uses a file-based routing system, which means the structure of your files and folders determines the routes in your app.

### Basic Structure

In Next.js, you create an app directory at the root of your project. Inside this directory, you organize your routes using folders and files.

app/
├── dashboard/
│ ├── layout.js
│ └── page.js
└── settings/
├── layout.js
└── page.js

In this example:

The dashboard folder represents the /dashboard route.
The settings folder represents the /settings route.
Each folder contains a layout.js file for the common layout and a page.js file for the specific page content.

Next.js does not use export default function handler() for API routes. Instead, it follows a different convention.

### API conventions

You can handle different HTTP methods by exporting functions named after the methods (e.g., GET, POST):

// app/api/user/route.js
export async function GET(request)
export async function POST(request)
