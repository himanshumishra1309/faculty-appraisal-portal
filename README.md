# 🎓 Faculty Appraisal Portal

🌐 **Live Demo**: [https://faculty-appraisal-web-portal.vercel.app/](https://faculty-appraisal-web-portal.vercel.app/)

📚 **Documentation**: [https://www.notion.so/Faculty-Appraisal-System-2d9e01623804802dba97cf397f7047ef](https://www.notion.so/Faculty-Appraisal-System-2d9e01623804802dba97cf397f7047ef)

🎥 **Video Demo**: [https://youtu.be/YrzR0nACzPA](https://youtu.be/YrzR0nACzPA)

---

## 🌟 The Challenge We're Solving

In higher education today, brilliant educators are trapped in outdated appraisal systems drowning in paperwork. Traditional processes waste countless hours on manual documentation, lack transparency, and fail to capture the full spectrum of faculty contributions. The result? Talented faculty feeling undervalued, administrators making decisions with incomplete information, and institutions unable to recognize and nurture excellence effectively.

**The cost is high:** Faculty lose time they could spend teaching and researching. Administrators struggle to get a holistic view of performance. Students miss out on the quality education they deserve. Excellence goes unrecognized while growth stagnates.

This isn't just about digitizing forms—it's about transforming how we value educators who shape minds and change lives. It's about creating a culture where every contribution is acknowledged in real-time and excellence becomes visible, measurable, and rewarded.

---

## 💡 Our Solution: A Revolutionary Platform for Academic Excellence

The **Faculty Appraisal Portal** is a comprehensive, intelligent system that transforms faculty performance management and career advancement. This real-time, web-based platform empowers educators while providing administrators with actionable insights for strategic decision-making.

### 🎯 Core Features

**📊 Comprehensive Activity Tracking**
- **Multi-Domain Coverage**: Tracks all faculty contributions across teaching, research papers, conferences, seminars, workshops, expert lectures, student guidance, projects etc.
- **Real-Time Updates**: Every activity is logged instantly, eliminating delays and ensuring current information
- **Centralized Repository**: One secure platform for all professional achievements—no more scattered documents

**⭐ Smart Points-Based System**
- **Automated Scoring**: Every contribution earns points based on admin-defined criteria
- **Fair Evaluation**: Standardized point allocation ensures consistent, transparent assessment across all domains
- **Dynamic Tracking**: Faculty can see their accumulated points grow with each achievement

**📈 Performance Analytics & Reports**
- **Monthly Reports**: Faculty receive detailed monthly summaries showing their position among colleagues
- **Percentile Rankings**: Intelligent ranking system helps administrators quickly identify top performers
- **Graphical Dashboards**: Visual reports enable easy comparison of faculty performance over time
- **Trend Analysis**: Track growth trajectories and identify areas for improvement

**💬 Integrated Student Feedback**
- **Complete Loop Integration**: Student feedback seamlessly incorporated into faculty evaluation
- **Holistic Assessment**: Combines objective metrics with student perspectives for comprehensive appraisal
- **Actionable Insights**: Helps faculty understand and improve their teaching effectiveness

**🏆 Culture of Excellence**
- **Friendly Competition**: Transparent rankings foster healthy competition and motivation
- **Growth Mindset**: Encourages continuous improvement through visible progress tracking
- **Recognition System**: Outstanding contributions are immediately visible and acknowledged

**🔒 Security & Efficiency**
- **Role-Based Access**: Secure authentication ensures data confidentiality
- **Paperless Operations**: Fully digital workflow supports environmental sustainability
- **Admin Tools**: Powerful dashboard for viewing, sorting, and downloading reports in PDF format, reducing admin's burden as well. 

### The Impact

This platform transforms appraisal from a bureaucratic burden into a strategic advantage. Faculty feel valued with clear visibility of their contributions. Administrators gain data-driven insights for informed decision-making. Institutions foster a culture where excellence is recognized, growth is nurtured, and every educator's journey is supported by technology that works as tirelessly as they do.

---

### Login Credentials

| **Role**    | **Username**               | **Password** |
|-------------|----------------------------|--------------|
| **Admin**   | `admin@gmail.com`           | `admin`      |
| **Faculty** | `akhiljaiby@gmail.com`      | `1234`       |
| **Student** | `himanshu@gmail.com`        | `1234`       |

---

## 🚀 Setting Up the Platform on Your Local Machine

Ready to experience the Faculty Appraisal Portal firsthand? Follow these comprehensive steps to get the platform running on your localhost. Don't worry—we've made the setup process as smooth as possible!

### 📋 Prerequisites

Before you begin, make sure you have the following installed on your system:
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- A code editor (we recommend **VS Code**)
- **Git** for cloning the repository

### 🔧 Tech Stack Overview

- **Frontend**: React with Vite
- **Backend**: Express.js (Node.js)
- **Database**: MongoDB
- **File Storage**: Supabase
- **Authentication**: JWT (JSON Web Tokens)

---

### 📦 Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/himanshumishra1309/faculty-appraisal-portal.git
cd faculty-appraisal-portal
```

### 🔄 Step 2: Configure API Endpoints for Localhost

If you're using **VS Code**, this step will save you tons of time:

1. Open the project in VS Code
2. Press `Ctrl + Shift + F` (or `Cmd + Shift + F` on Mac) to open the global search
3. Click the **`>`** (toggle replace) icon on the left side of the search bar
4. In the **search field** (top), enter: `https://faculty-appraisal-portal.vercel.app/`
5. In the **replace field** (bottom), enter: `http://localhost:6005/`
6. Click **Replace All** to update all API endpoints to point to your local server

This ensures your frontend communicates with your local backend instead of the production server.

---

### 💻 Step 3: Frontend Setup (Client)

Let's get the React frontend up and running:

```bash
cd client
npm install
```

If you encounter any dependency conflicts, use:

```bash
npm install --force
```

Once installation is complete, start the development server:

```bash
npm run dev
```

Your frontend should now be running at **`http://localhost:5173`** (or the port shown in your terminal).

✅ **Frontend is ready!** Keep this terminal window open.

---

### ⚙️ Step 4: Backend Setup (Server)

Now let's configure and run the Express backend. Open a **new terminal window**.

#### 4.1: Install Backend Dependencies

```bash
cd server
npm install
```

#### 4.2: Configure Environment Variables

Create a `.env` file in the `server` folder:

```bash
# If you're in the server directory
touch .env
```

Now, copy the contents from `.env.example` and paste them into your newly created `.env` file. You'll need to fill in the actual values for the following services.

---

### 🍃 Step 5: MongoDB Database Setup

MongoDB will store all your application data. Follow these steps:

#### 5.1: Create MongoDB Account & Cluster

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click **"Try Free"** and create an account (or sign in if you have one)
3. Once logged in, click **"Create"** to start a new project

#### 5.2: Create a New Project

1. Enter your **Project Name** (e.g., "Faculty Appraisal Portal")
2. Click **"Next"**
3. Click **"Create Project"**

#### 5.3: Create a Database Cluster

1. Click **"Create"**
2. Choose the **FREE** tier (M0 Sandbox)
3. Select your preferred **cloud provider** and **region** (choose one closest to you)
4. Click **"Create Deployment"**

#### 5.4: Create Database User

A popup will appear asking you to create a database user:

1. Enter a **Username**
2. Click **"Autogenerate Secure Password"** or create your own
3. **IMPORTANT**: Copy and save this password somewhere safe—you'll need it shortly!
4. Click **"Create Database User"**

#### 5.5: Get Your MongoDB Connection String

1. Click **"Choose a connection method"**
2. Select **"Compass"** (or "Drivers" works too)
3. You'll see a connection string that looks like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net
   ```
4. **Copy this entire URL**

#### 5.6: Configure Network Access

Before using your database, you need to allow connections from any IP address:

1. On the left sidebar, under **"Security"**, click **"Network Access"**
2. Click **"Add IP Address"** or **"Edit"** on existing entry
3. In the dialog box, click **"Allow Access from Anywhere"** or manually enter:
   - **IP Address**: `0.0.0.0/0`
4. Click **"Confirm"**

This configuration allows your application to connect to MongoDB from any location without IP whitelisting restrictions. Perfect for development and testing!

✅ **Network access configured!**

#### 5.7: Update Your .env File

Open your `server/.env` file and update the `MONGODB_URI`:

```env
MONGODB_URI=mongodb+srv://<username>:<db_password>@cluster0.xxxxx.mongodb.net
```

- Replace `<username>` with your database username
- Replace `<db_password>` with the password you copied earlier

**Example:**
```env
MONGODB_URI=mongodb+srv://admin:MySecurePass123@cluster0.abc123.mongodb.net
```

✅ **MongoDB is configured!**

---

### ☁️ Step 6: Supabase Storage Setup

Supabase will handle file uploads (profile pictures, documents, etc.). Here's how to set it up:

#### 6.1: Create Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Start your project"** and sign up (you can use GitHub to sign in)
3. Once logged in, you'll see your Supabase dashboard

#### 6.2: Create a New Project

1. Click **"New Project"**
2. Select your **Organization** (or create a new one)
3. Fill in the project details:
   - **Name**: `Faculty Appraisal Portal` (or any name you prefer)
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose the closest region to you
   - **Pricing Plan**: Select **"Free"**
4. Click **"Create new project"**

⏳ Wait 1-2 minutes while Supabase sets up your project.

#### 6.3: Create a Storage Bucket

Once your project is ready:

1. In the left sidebar, click **"Storage"** (under "Project Configuration")
2. Click **"Create a new bucket"**
3. Enter the bucket details:
   - **Name**: `teacher-data` (this is important—use exactly this name)
   - **Public bucket**: Toggle **ON** (so files can be accessed via URLs)
4. Click **"Create bucket"**

✅ Your storage bucket is ready!

#### 6.4: Get Your Supabase Credentials

Now you need three pieces of information:

**A) Supabase URL:**
- On the left sidebar, click **"Project Settings"** (gear icon at the bottom)
- Click **"Data API"** under Project Settings
- Under **"API Settings"**, find **"Project URL"**
- Copy this URL (it looks like: `https://abcdefgh.supabase.co`)

**B) Supabase Service Role Key:**
- Click **"API Keys"** under Project Settings
- Find the **"Legacy anon, service_role API keys"** tab and click it.
- Reveal **"service_role"** key and copy it.
- ⚠️ **Important**: Keep this key secret! Never commit it to GitHub!

**C) Bucket Name:**
- This is simply: `teacher-data` (the name you used when creating the bucket)

#### 6.5: Update Your .env File

Open your `server/.env` file and add these values:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
SUPABASE_BUCKET_NAME=teacher-data
```

**Example:**
```env
SUPABASE_URL=https://abcdefgh.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOadJKJsfjhsdnJK8alk2ssdf...
SUPABASE_BUCKET_NAME=teacher-data
```

✅ **Supabase is fully configured!**

---

### 🎯 Step 7: Start the Backend Server

With everything configured, it's time to run your backend:

```bash
# Make sure you're in the server directory
cd server

# Start the development server
npm run dev
```

You should see output like:

```
Server is running at port: 6005
MongoDB connected successfully!
```

✅ **Backend is running!** Your server is now live at **`http://localhost:6005`**

---

### 🎉 Step 8: Access Your Application

Congratulations! Your Faculty Appraisal Portal is now running locally:

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:6005](http://localhost:6005)

Open your browser and navigate to the frontend URL to start exploring the platform!

---

### 📝 Quick Reference: Your .env File

Here's what your complete `server/.env` file should look like:

```env
PORT=6005
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=acCeSsToKeN-madeByHimansHuMisHRa
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=refREsHToKeN-madeByHimansHuMisHRa
REFRESH_TOKEN_EXPIRY=10d
SUPABASE_BUCKET_NAME=teacher-data
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

---

### 🐛 Troubleshooting

**Issue: "Cannot connect to MongoDB"**
- Double-check your MongoDB URI in the `.env` file
- Ensure your password doesn't contain special characters (use alphanumeric)
- Verify your IP address is whitelisted in MongoDB Atlas (Network Access)

**Issue: "Port already in use"**
- Change the `PORT` value in your `.env` file to a different port (e.g., 6006)
- Or kill the process using that port

**Issue: "File upload not working"**
- Verify your Supabase bucket is set to **public**
- Double-check the `SUPABASE_SERVICE_ROLE_KEY` (not the anon key)
- Ensure the bucket name matches exactly: `teacher-data`

**Issue: Frontend can't connect to backend**
- Make sure you completed Step 2 (replacing production URLs with localhost)
- Verify both frontend and backend servers are running
- Check that the backend is running on port 6005

---
