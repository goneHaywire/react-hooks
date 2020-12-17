import useForm from "./useForm";
// import { useMemo } from 'react'
import useTheme from './useTheme'

function App() {
  const [formData, setInput] = useForm({ pass: 'nope', number: 5 })
  const [theme, setTheme] = useTheme("kot")
  console.log('render: app')

  return (
    <div style={{ background: theme === "light" ? "#cecece" : "#454545" }}>
      <p>theme: {theme}</p>
      {/* <form action="">
        <input type="text" data-name="name" name="name" onChange={setInput} value={formData.name} />
        <input type="text" name="lname" onChange={setInput} value={formData.lname} />
        <select name="number" id="" onChange={setInput} value={formData.number}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </form> */}
      <button onClick={() => { theme !== "dark" && setTheme('dark') }}>dark theme</button>
      <button onClick={() => { theme !== "light" && setTheme('light') }}>light theme</button>
      <pre>
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
}

export default App;
