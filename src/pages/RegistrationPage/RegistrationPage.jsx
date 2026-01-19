import {useForm} from "react-hook-form";
import './RegistrationPage.css';
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
const RegistrationPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm( {defaultValues: initialValues} );
  const navigate = useNavigate();
  const [timer, setTimer] = useState(0);
  const [timerIntervalId, setTimerIntervalId] = useState(null)

  if(timer >= 5) {
    clearInterval(timerIntervalId);
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    setTimerIntervalId(timerInterval)
    return () => clearInterval(timerInterval)
  }, [])

  const onSubmit = () => navigate('/success');

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
            <label htmlFor="country">Страна<span>*</span>:</label>
            <input
                type="text"
                name="country"
                placeholder="Страна"
                className={errors.country ? 'formControl invalid' : 'formControl'}
                {...register("country", {required: true})}
            />
            {errors.country && <p>Пожалуйста, заполните обязательное поле!</p>}
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
          <div className="formGroup">
            <label htmlFor="Phone">Телефон:</label>
            <input
                type="tel"
                className="formControl"
                placeholder="7 (999) 999-99-99"
                {...register("phone")}
            />
          </div>

          {timer >= 5 && (<button type="submit">Отправить</button>)}
        </form>
      </div>
  );
};

export default RegistrationPage;
