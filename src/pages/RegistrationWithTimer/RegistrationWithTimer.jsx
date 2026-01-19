import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  phone: '',
  city: '',
  country: '',
}

const RegistrationWithTimer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm( {defaultValues: initialValues} );
  const navigate = useNavigate();
  const onSubmit = () => navigate('/success-fire');

  const [timer, setTimer] = useState(5);
  const [timerIntervalId, setTimerIntervalId] = useState(null)

  if(timer === 0) {
    clearInterval(timerIntervalId);
    navigate('/registration-fail')
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    setTimerIntervalId(timerInterval)
    return () => clearInterval(timerInterval)
  }, []);

  return (
      <div className="register">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formGroup">
            <label htmlFor="firstName">Имя<span>*</span>:</label>
            <input
                type="text"
                name="firstName"
                placeholder="Имя"
                className={errors.firstName ? 'formControl invalid' : 'formControl'}
                {...register("firstName", {required: true, maxLength: 80})}
            />
            {errors.firstName && <p>Пожалуйста, заполните обязательное поле!</p>}
          </div>
          <div className="formGroup">
            <label htmlFor="firstName">Фамилия<span>*</span>:</label>
            <input
                type="text"
                name="lastName"
                placeholder="Фамилия"
                className={errors.lastName ? 'formControl invalid' : 'formControl'}
                {...register("lastName", {required: true, maxLength: 80})}
            />
            {errors.lastName && <p>Пожалуйста, заполните обязательное поле!</p>}
          </div>
          <div className="formGroup">
            <label htmlFor="city">Город<span>*</span>:</label>
            <input
                type="text"
                name="city"
                placeholder="Город"
                className={errors.city ? 'formControl invalid' : 'formControl'}
                {...register("city", {required: true})}
            />
            {errors.city && <p>Пожалуйста, заполните обязательное поле!</p>}
          </div>
          <div className="formGroup">
            <label htmlFor="email">E-mail:</label>
            <input
                type="email"
                className="formControl"
                placeholder="mail@domain.com"
                {...register("email")}
            />
          </div>


          <div className="runningContainer">
            <button type="submit">Отправить</button>
          </div>
        </form>
        <div className="timer">{timer}</div>
      </div>
  )
};

export default RegistrationWithTimer;
