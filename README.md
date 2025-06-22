# CMSly - Content Management System

A modern, full-stack content management system built with Next.js 15, React 19, and Prisma. Features Google OAuth authentication, a rich text editor, and a clean dashboard interface.

## 🚀 Features

### ✅ Authentication

- **Google OAuth Integration** - Secure sign-in with Google accounts
- **JWT Session Management** - Stateless authentication with JWT tokens
- **Protected Routes** - Automatic redirection for unauthenticated users
- **User Management** - User profiles with roles and metadata

### ✅ Dashboard & Navigation

- **Responsive Sidebar** - Collapsible navigation with keyboard shortcuts
- **Dark Theme** - Modern dark UI with consistent styling
- **User Profile Display** - Shows authenticated user information
- **Breadcrumb Navigation** - Easy navigation between sections

### ✅ Content Editor

- **Rich Text Editor** - React Quill integration with formatting tools
- **Custom Styling** - Dark theme editor with custom CSS
- **Form Handling** - React Hook Form for form validation
- **Draft Management** - Create and edit content drafts

### ✅ Database & Backend

- **MongoDB Integration** - NoSQL database with Prisma ORM
- **User Schema** - Complete user model with authentication data
- **Post Management** - Content storage with categories and status
- **Prisma Adapter** - NextAuth.js integration with database

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Form validation and handling
- **React Quill** - Rich text editor

### Backend & Database

- **NextAuth.js 4** - Authentication framework
- **Prisma** - Type-safe database ORM
- **MongoDB** - NoSQL database
- **JWT** - JSON Web Token authentication

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Type safety (jsconfig.json)

## 📦 Installation

### Prerequisites

- Node.js 18+
- MongoDB database
- Google OAuth credentials

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd cms
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   # Google OAuth
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"

   # Database
   DATABASE_URL="mongo://your-mongodb-connection-string"

   # NextAuth
   NEXTAUTH_SECRET="your-super-secret-key-here-make-it-long-and-random"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up Google OAuth**

   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add `http://localhost:3000/api/auth/callback/google` to authorized redirect URIs

5. **Database setup**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

6. **Run the development server**

   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
cms/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes
│   │   │   └── sign-in/       # Sign-in page
│   │   ├── api/               # API routes
│   │   │   └── auth/          # NextAuth API
│   │   ├── dashboard/         # Dashboard page
│   │   ├── draft/             # Draft editor page
│   │   └── layout.js          # Root layout
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── Editor.jsx        # Rich text editor
│   │   ├── navbar.jsx        # Navigation bar
│   │   └── app-sidebar.jsx   # Sidebar navigation
│   ├── lib/                  # Utility libraries
│   │   ├── auth.js          # NextAuth configuration
│   │   ├── prisma.js        # Database client
│   │   └── utils.js         # Utility functions
│   └── hooks/               # Custom React hooks
├── prisma/                  # Database schema
│   └── schema.prisma       # Prisma schema
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## 🔐 Authentication Flow

1. **Sign In**: Users click "Sign in" button
2. **Google OAuth**: Redirected to Google for authentication
3. **Callback**: Google redirects back with authorization code
4. **Token Exchange**: NextAuth exchanges code for user data
5. **Database**: User is created/updated in MongoDB
6. **Session**: JWT session is created and stored
7. **Redirect**: User is redirected to dashboard

## 📝 Content Management

### Creating Content

1. Navigate to `/draft` page
2. Enter post title
3. Use rich text editor for content
4. Add keywords
5. Save draft

### Editor Features

- **Text Formatting**: Bold, italic, underline, strikethrough
- **Headings**: H1, H2, H3
- **Lists**: Bullet and ordered lists
- **Undo/Redo**: Content history management

## 🎨 Styling

The project uses a modern dark theme with:

- **Tailwind CSS 4** for utility classes
- **Custom CSS variables** for consistent theming
- **Radix UI** components for accessibility
- **Responsive design** for all screen sizes

## 🔧 Configuration

### Next.js Configuration

- **Image Optimization**: Configured for Google profile images
- **App Router**: Using Next.js 15 App Router
- **TypeScript**: Configured with jsconfig.json

### Database Schema

- **User Model**: Authentication and profile data
- **Post Model**: Content with categories and status
- **Account Model**: OAuth provider accounts
- **Session Model**: User sessions

## 🚀 Deployment

### Environment Variables for Production

```env
GOOGLE_CLIENT_ID="your-production-google-client-id"
GOOGLE_CLIENT_SECRET="your-production-google-client-secret"
DATABASE_URL="your-production-mongodb-url"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-domain.com"
```

### Build and Deploy

```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

**Authentication Errors**

- Verify Google OAuth credentials
- Check NEXTAUTH_URL matches your domain
- Ensure DATABASE_URL is correct

**Database Connection**

- Verify MongoDB connection string
- Run `npx prisma generate` after schema changes
- Check database permissions

**Editor Issues**

- Clear browser cache
- Check for JavaScript errors in console
- Verify all dependencies are installed

## 🔮 Roadmap

- [ ] Post publishing workflow
- [ ] Category management
- [ ] Media upload functionality
- [ ] User roles and permissions
- [ ] Analytics dashboard
- [ ] SEO optimization
- [ ] API endpoints for external access
- [ ] Multi-language support

---

Built with ❤️ using Next.js, React, and modern web technologies.
