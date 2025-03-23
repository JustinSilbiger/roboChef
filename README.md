# Chef Claude - AI Recipe Generator

A React application that generates recipes based on ingredients you have on hand, powered by the Mixtral-8x7B AI model.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16+)
- npm or yarn
- A Hugging Face account and API token

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd roboChef
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   - Create a `.env` file in the root directory
   - Add your Hugging Face API token
     ```
     VITE_HF_ACCESS_TOKEN=your_huggingface_access_token_here
     ```
   - To get a token, visit [Hugging Face Settings](https://huggingface.co/settings/tokens)

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:5173/`
   - Add ingredients and generate recipes using the AI model

### Troubleshooting

- If you see API errors, verify your Hugging Face token is correctly set in the `.env` file
- Make sure the token has the necessary permissions for the Mixtral-8x7B model
- After updating the `.env` file, restart the development server

## 🌟 Key Features

- Dynamic ingredient list management
- AI-powered recipe generation
- Responsive design with modern UI/UX
- Markdown rendering of AI responses

## 🎓 Learning Points

### React Fundamentals

- Component architecture and composition
- Props vs State management
- Conditional rendering
- Event handling in React
- Form management with modern React patterns

### State Management

- `useState` hook implementation
- Array state management
- Complex state updates
- State lifting and prop drilling
- Parent-child component communication

### Forms in React

- Form submission handling
- FormData API usage
- Controlled vs Uncontrolled components
- Modern form patterns with `action` prop

### API Integration

- AI model integration (Hugging Face)
- Async/await implementation
- Error handling in API calls
- Environment variable management

### UI/UX Development

- Responsive design implementation
- CSS-in-JS patterns
- Modern UI transitions and animations
- Markdown rendering with react-markdown
- Accessibility considerations

## 🛠️ Technical Stack

- React + Vite
- Hugging Face Inference API
- react-markdown

## 📝 Future Directions

- Organize component directory structure
- Implement loader during recipe fetch
- Autoscroll to recipe post-generation
