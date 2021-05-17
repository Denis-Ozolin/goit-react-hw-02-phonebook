import { v4 as uuidv4 } from 'uuid';

const ContactsList = ({ arr, onClick }) => {
  return (
      <ul>
      {arr.map(item => (
          <li key={uuidv4()}>{item.name}: {item.number}
            <button type="button" onClick={onClick}>Delete</button>
          </li>
        ))}
      </ul >
  )
}

export default ContactsList;