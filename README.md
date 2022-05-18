# Learning React
Code dumpsite for my journey of learning React

### Creating a React App
- use this command
```
# do this once
npm install -g create-react-app

# then this everytime you want a new project
npx create-react-app <app name>
```
- if you are getting errors, try to clear the dependencies cache (or uninstall the create-react-app module)
```
npx clear-npx-cache
npm uninstall -g create-react-app
```

### JSX
```javascript
function App() {
  return (
    <div style={{ backgroundColor: 'red', border: '1px solid red' }}>
      Hi there!
    </div>
  );
}
```

### Learning Materials:
- [Udemy: Learning React with Redux (Stephen Grider)](https://www.udemy.com/share/101WcY3@OGSJpEcHFS_tCt09qFK27O1wINrLabYACt5Ok9tYPRz5--EKh9vZKh07DZmygQzq/)

