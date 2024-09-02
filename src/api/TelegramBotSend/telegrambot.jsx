import axios from 'axios'
export const telegrambot = async (message) => {
    const styleMessage = `Ismim: ${message.name}%0ATelefon nomer: ${message.tel}%0AIzox: ${message.comment}`
    axios.post(`${import.meta.env.REACT_APP_RES_BASE_BOT}sendMessage?chat_id=-1002169925469&text=${styleMessage}`)
}