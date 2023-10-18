import UserProfile from './components/UserProfile/index'
import './App.css'

// const userDetails = {
//   imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
//   name: 'Esthar Howard',
//   role: 'Software Developer',
// }
const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esthar Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">User List</h1>
    <ul>
      {/* <UserProfile userDetails={userDetailsList[0]} />
      <UserProfile userDetails={userDetailsList[1]} />
      <UserProfile userDetails={userDetailsList[2]} />
      <UserProfile userDetails={userDetailsList[3]} /> */}
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
