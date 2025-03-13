# HypoMatrix v2

## Folder Structure

```
📦 project-root
├── 📂 src
│   ├── 📂 app
│   │   ├── 📜 layout.tsx       # Root layout
│   │   ├── 📜 page.tsx         # Main page (entry point)
│   │   └── ...                 # Additional routes and components
│   ├── 📂 components           # Reusable UI components
│   ├── 📂 assets               # Media files
│   ├── 📂 views                # View component for routes
│   ├── 📂 lib                  # Library modules (e.g., API clients)
│   ├── 📂 styles               # Global and component-specific styles
│   └── 📂 utils                # Utility functions
├── 📂 public                   # Static assets (images, fonts, etc.)
├── 📜 .eslintrc.json           # ESLint configuration
├── 📜 .gitignore               # Git ignore file
├── 📜 next.config.js           # Next.js configuration
├── 📜 package.json             # Dependencies and scripts
└── 📜 README.md                # Project documentation
```

**Notes:**

- The `src` directory contains all application-specific code, promoting a clear separation from configuration files.
- The `public` directory remains in the root, serving static assets directly.
- Configuration files like `package.json`, `next.config.js`, and `.eslintrc.json` are also in the root directory.
