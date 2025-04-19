
import '../styles/massegeForm.css'
const Slide = () => {
    return (
        <div className="Back">
            <div className="messageCont">
                <h1>Consectetur sed do eiusmod</h1>
                <div className="name">
                    <input type="text" placeholder="Your Name" />
                </div>
                <div className="emailInput">
                    <input type="email" placeholder="Your Email" />
                </div>
                <form>
                    <label style={{ display: 'block', marginTop: '10px' }}>
                        <input type="checkbox" required /> 
                    Нажимая кнопку "Отправить" Вы даёте свое согласие на обработку введенной персональной информации в соответствии с Федеральным Законом №152-ФЗ от 27.07.2006 "О персональных данных"
                    </label>
                    <button type="submit" style={{ marginTop: '10px' }}>Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Slide;