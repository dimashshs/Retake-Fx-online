import './App.css';
import { useState } from 'react';
import myImage from './logo.png';



function User() {


  const [id, setId] = useState('');
  const [fullName, setFullName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [group, setGroup] = useState('');
  const [contractNumber, setContractNumber] = useState('');
  const [paymentPurpose, setPaymentPurpose] = useState('FX');
  const [course, setCourse] = useState('1');
  const [subject, setSubject]=useState('');

  const handleSubjectChange=(event)=>{
    setSubject(event.target.value);
  }

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleSpecialtyChange = (event) => {
    setSpecialty(event.target.value);
  };

    const handleGroupChange = (event) => {
    setGroup(event.target.value);
  };

  const handleContractNumberChange = (event) => {
    setContractNumber(event.target.value);
  };

  const handlePaymentPurposeChange = (event) => {
    setPaymentPurpose(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
    };


    const calculatePrice = () => {
    const creditPriceMap = {
    '1': {
    'IT Management': 11915,
    'IT Entrepreneurship': 11915,
    'Digital Journalism': 11915,
    'Computer Science': 15342,
    'Software Engineering': 15342,
    'Media Technologies': 15342,
    'MCS': 15342,
    'Big Data Analysis': 15342,
    'Cyber Security': 15342,
    'Smart Technologies': 15342,
    },
    '2': {
    'IT Management': 11915,
    'IT Entrepreneurship': 11915,
    'Digital Journalism': 11915,
    'Computer Science': 15342,
    'Software Engineering': 15342,
    'Media Technologies': 15342,
    'Big Data Analysis': 15342,
    'Cyber Security': 15342,
    'Smart Technologies': 15342,
    },
    '3': {
    'IT Management': 13318,
    'Digital Journalism': 13318,
    'Computer Science': 16742,
    'Software Engineering': 16742,
    'Media Technologies': 16742,
    'Big Data Analysis': 16742,
    'Cyber Security': 16742,
    },
    };
    const price = creditPriceMap[course][specialty];
    const credits = paymentPurpose === 'FX' ? 1 : 5;
    return price * credits;
    };


    const handleSubmit = (event) => {
      event.preventDefault();
    
    
      // Создаем виджет и передаем в опции значение цены
      const widget = new window.YooMoneyCheckoutWidget({
        confirmation_token: 'test_j31_hRBr1bt0ocGsKyBzmMvAPzWnSUoBG9lmcKtifnQ',
        return_url: 'http://localhost:3000/',
        error_callback: function (error) {
          console.error(error);
        },
      });
    
      // Запускаем виджет
      widget.render('payment-form');
    };
    

  return (
    <div className="container">
    <img src={myImage} alt="My Image" />
    <h1 class="FX"> FX/Retake оплата </h1>
    <div id="payment-form">
    <form onSubmit={handleSubmit} id="payment-form">
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" value={id} onChange={handleIdChange} />
      </div>
      <div>
        <label htmlFor="fullName">ФИО:</label>
        <input type="text" id="fullName" value={fullName} onChange={handleFullNameChange} />
      </div>
      <div>
  <label htmlFor="course">Курс:</label>
  <select id="course" value={course} onChange={handleCourseChange}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</div>
      <div>
  <label htmlFor="specialty">Специальность:</label>
  <select id="specialty" value={specialty} onChange={handleSpecialtyChange}>
    <option value=" "></option>
    <option value="Software Engineering">Software Engineering</option>
    <option value="Computer Science">Computer Science</option>
    <option value="Cyber Security">Cyber Security</option>
    <option value="IT Management">IT Management</option>
    <option value="Media Technologies">Media Technologies</option>
    <option value="Big Data Analysis">Big Data Analysis</option>
    <option value="Digital Journalism">Digital Journalism</option>
    <option value="IT Entrepreneurship">IT Entrepreneurship</option>
    <option value="Smart Technologies">Smart Technologies</option>
  </select>
</div>
      <div>
        <label htmlFor="group">Группа:</label>
        <input type="text" id="group" value={group} onChange={handleGroupChange} />
      </div>
  
      <div>
        <label htmlFor="contractNumber">Номер договора:</label>
        <input type="text" id="contractNumber" value={contractNumber} onChange={handleContractNumberChange} />
      </div>
      
      <div>
        <label htmlFor='subject'>Предмет</label>
        <select id='subject' value={subject} onChange={handleSubjectChange}>
          <option value="Operating Systems Concepts">Operating Systems Concepts</option>
          <option value="Advanced Databases (NoSQL)">Advanced Databases (NoSQL)</option>
          <option value="Advanced Programming">Advanced Programming</option>
          <option value="Computational Mathematics">Computational Mathematics</option>
          <option value="Computer Organisation and Architecture">Computer Organisation and Architecture</option>
          <option value="Industrial practice">Industrial practice</option>
        </select>
      </div>

      <div>
        <label htmlFor="paymentPurpose">Назначение платежа:</label>
        <select id="paymentPurpose" value={paymentPurpose} onChange={handlePaymentPurposeChange}>
          <option value="FX">FX</option>
          <option value="Retake">Ретейк</option>
        </select>
      </div>
      <p>Стоимость: {calculatePrice()} тенге</p>
      
      <button type="submit">Оплатить</button>
    </form>
    </div>
   </div>
  );
}

export default User;
