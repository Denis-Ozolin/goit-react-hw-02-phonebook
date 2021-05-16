import { v4 as uuidv4 } from 'uuid';

const ContactsList = ({ arr }) => {
  return (
      <ul>
        {arr.map(item => (
            <li key={uuidv4()}>{item.name}: {item.number}</li>
        ))}
      </ul >
  )
}

export default ContactsList;