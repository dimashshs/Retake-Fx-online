import React, { useState } from 'react';
import './Admin.css';

function Admin() {
  const [data, setData] = useState([
    { id: 211511, fullname: 'Динмухамед Кусайын Габитулы', specialty: 'Software Engineering', group: 'SE-2021', contractNumber:'215121', paymentType:'FX'  },
    { id: 211522, fullname: 'Батырхан Батырханов Батырханович', specialty: 'Computer Science', group: 'IT-2021', contractNumber:'21313', paymentType:'Retake' },
    { id: 211434, fullname: 'Имя Фамилия ОООООО', specialty: 'Software Engineering', group: 'IT-2022', contractNumber:'211312', paymentType:'FX' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return (
      item.fullname.toLowerCase().includes(lowerCaseTerm) ||
      item.id.toString().includes(lowerCaseTerm)
    );
  });

  return (
    <div className="container">
      <div>
        <h1>Admin Panel</h1>
        <div>
          <input
            type="text"
            placeholder="Введите имя или ID студента"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>ФИО</th>
              <th>Специальность</th>
              <th>Группа</th>
              <th>Номер договора</th>
              <th>Назначение платежа</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.fullname}</td>
                  <td>{item.specialty}</td>
                  <td>{item.group}</td>
                  <td>{item.contractNumber}</td>
                  <td>{item.paymentType}</td>
                </tr>
               );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
