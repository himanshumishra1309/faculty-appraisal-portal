# 🎓 Faculty Appraisal Portal

🌐 **Live Demo**: [https://faculty-appraisal-web-portal.vercel.app/](https://faculty-appraisal-web-portal.vercel.app/)

---

## 🌟 The Challenge We're Solving

Imagine a world where brilliant educators—the architects of tomorrow's leaders—are trapped in a maze of paperwork, spending countless hours documenting their achievements instead of inspiring minds. Picture dedicated professors juggling teaching, groundbreaking research, community service, and administrative duties, only to face an outdated appraisal system that fails to capture the full spectrum of their contributions.

**This is the reality in higher education today.**

Traditional faculty appraisal processes are plagued with inefficiencies that prevent institutions from recognizing and nurturing excellence. Faculty members waste valuable time filling out repetitive forms, manually tracking publications, seminars, and projects—time that could be spent mentoring students or advancing research. Administrators struggle with mountains of paperwork, making it nearly impossible to gain a clear, holistic view of faculty performance. The lack of transparency creates frustration, the manual processes introduce errors, and the entire system becomes a barrier to professional growth rather than a catalyst for it.

The stakes are higher than ever. In an era where education shapes the future, we cannot afford systems that hold back our educators. Universities need to recognize excellence promptly, support faculty development strategically, and make data-driven decisions about career advancements. Yet, traditional methods—buried under paper trails and plagued by delays—make this virtually impossible.

**The cost of inaction?** Talented faculty feeling undervalued. Administrators making decisions with incomplete information. Institutions falling behind in their mission to foster academic excellence. And most critically, a generation of students missing out on the quality education they deserve.

This isn't just about digitizing forms—it's about transforming how we value and elevate the educators who shape minds and change lives. It's about creating a culture where excellence is recognized, growth is nurtured, and every contribution—from a published paper to a guest lecture—is acknowledged in real-time.

---

## 💡 Our Solution: A Revolutionary Platform for Academic Excellence

Enter the **Faculty Appraisal Portal**—a comprehensive, intelligent system designed to revolutionize how educational institutions manage faculty performance and career advancement.

We've built a platform that doesn't just solve problems; it transforms the entire appraisal ecosystem. This is a real-time, web-based solution that empowers faculty members to take control of their professional journey while providing administrators with the insights they need to make informed decisions.

### What Makes Our Solution Different?

**For Faculty Members:**
Our portal offers a seamless, intuitive environment where educators can effortlessly document their professional activities. Whether it's research publications, seminars/workshops conducted, projects undertaken, students guided, short term training programs conducted, event participations, guest lectures delivered, other significant contributions made toward the growth of their own skill or towards the growth of the institution, everything is tracked in one centralized, secure platform. No more scattered documents, no more forgotten achievements, no more hours wasted on paperwork. Faculty members can update their profiles in real-time, ensuring their accomplishments are immediately visible and properly recognized.

The system integrates automated tracking capabilities, capturing research outputs dynamically—similar to how Google Scholar operates—eliminating manual entry errors and saving precious time. Faculty can focus on what they do best: teaching, researching, and inspiring students.

**For Administrators:**
Imagine having instant access to a comprehensive dashboard that presents a complete picture of every faculty member's contributions. Our admin panel provides powerful tools to view, sort, and analyze appraisal data across multiple dimensions—by name, employee code, department, or submission date. Need to generate reports? Download detailed submissions in PDF format with a single click. Want to identify high performers or those needing support? Our analytics make it effortless.

**The Real-Time Advantage:**
Unlike traditional systems that operate on outdated information, our platform ensures that every update is immediately available. When a faculty member publishes a paper or conducts a seminar, administrators see it instantly. This real-time visibility enables proactive decision-making, timely recognition, and strategic resource allocation.

**Security & Confidentiality:**
We understand that faculty data is sensitive. That's why we've implemented robust security measures with encrypted data storage and role-based access controls. Only authorized personnel can access specific information, ensuring complete confidentiality and data integrity.

**Sustainability:**
In alignment with the Paperless India initiative, our solution eliminates the need for physical documentation, reducing environmental impact while streamlining operations. This isn't just good for efficiency—it's good for the planet.

### The Impact

By implementing the Faculty Appraisal Portal, institutions transform their appraisal process from a bureaucratic burden into a strategic advantage. Faculty members feel valued and supported, administrators gain actionable insights, and the entire institution moves toward a culture of continuous improvement and transparent excellence recognition.

This is more than software—it's a commitment to honoring the educators who shape our future, powered by technology that works as hard as they do.

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
git clone https://github.com/your-username/faculty-appraisal-portal.git
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
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/
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