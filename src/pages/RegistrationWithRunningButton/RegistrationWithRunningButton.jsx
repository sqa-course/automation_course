import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import './RegistrationWithRunningButton.css';
import {useRef} from "react";
import shrek from '../../assets/shrek.png'

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  phone: '',
  city: '',
  country: '',
}

const RegistrationWithRunningButton = () => {
  const { register, handleSubmit, formState: { errors } } = useForm( {defaultValues: initialValues} );
  const navigate = useNavigate();
  const onSubmit = () => navigate('/success-fire');
  const ref = useRef(null);

  const onHoverHandle = () => {
    ref.current.style.position = 'absolute';
    ref.current.style.top = Math.random() * 200 + 'px';
    ref.current.style.left = Math.random() * 600 + 'px';
  }
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
            <button ref={ref} type="submit" onMouseEnter={onHoverHandle}>Отправить</button>
          </div>
        </form>
        <img className="shrek" src={shrek} alt="shrek"/>
      </div>
  )
};

export default RegistrationWithRunningButton;
