import React, { useState } from 'react'
import "./create.css";

const Create = () => {

  const [activityState, setActivityState] = useState({
    name: "",
    difficulty: 0,
    duration: "",
    season: "Todo el Año",
    countries: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: "",
  });



  const validation = (activityState, name) => {

    switch (name) {
      case "name":
        if (activityState.name === "") {
          setErrors({ ...errors, name: "Indicar la actividad es obligatorio" });
        } else if (!/^[a-zA-Z\s]{1,40}$/.test(activityState.name)) {
          setErrors({ ...errors, name: "Solo se permiten letras mayúsculas, minúsculas y espacios hasta 40 caracteres" });
        } else {
          setErrors({ ...errors, name: "" });
        }
        break;

      // case "difficulty":
      //   if (activityState.difficulty < 1 || activityState.difficulty > 5) {
      //     setErrors({ ...errors, difficulty: "Indicar la dificultad obligatorio" });
      //   } else {
      //     setErrors({ ...errors, difficulty: "" });
      //   }
      //   break;

      case "duration":
        if (!/^(1[0-2]|[1-9])$/.test(activityState.duration)) {
          setErrors({ ...errors, duration: "La duración debe estar entre 1 y 12 horas" });
        } else {
          setErrors({ ...errors, duration: "" });
        }
        break;

      default:
        break;
    }
  };


  const handleChange = (event) => {
    if (event.target.name === "countries") {
      setActivityState({
        ...activityState,
        countries: [...activityState.countries, event.target.value]
      })
    } else {
      setActivityState({
        ...activityState,
        [event.target.name]: event.target.value
      })
    }
    validation({
      ...activityState,
      [event.target.name]: event.target.value
    }, event.target.name);

  }

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((starIndex) => (
      <span key={starIndex} onClick={() => handleChange({ target: { name: 'difficulty', value: starIndex } })}>
        {starIndex <= activityState.difficulty ? '★' : '☆'}
      </span>
    ));
  };
  const renderSeasonOptions = () => {
    const seasons = {
      'Todo el Año': '🌞🍂❄️🌸', // Sol para Todo el Año
      'Primavera y Verano': '🌞🌸', // Sol para Primavera y Verano
      'Otono e Invierno': '🍂❄️', // Hoja caña para Otono y Invierno
      Primavera: '🌸', // Flores para Primavera
      Verano: '🌞', // Sol para Verano
      Otoño: '🍂', // Hoja caída para Otoño
      Invierno: '❄️', // Nieve para Invierno
    };

    return Object.entries(seasons).map(([season, emoji]) => (
      <option key={season} value={season}>
        {`${emoji} ${season}`}
      </option>
    ));
  };
  const disabledFuntion = () => {
    return (
      !activityState.name ||
      !activityState.difficulty ||
      !activityState.duration ||
      !activityState.season ||
      !activityState.countries.length === 0
    );
  };


  return (
    <div className='form-cont'>
      <div><h2>Crear Actividades</h2></div>
      {console.log(activityState)}
      <form>
        <label >Actividad</label>
        <input name='name' onChange={handleChange} type="text" placeholder="Indicar la actividad" />
        <div><p>{errors.name}</p></div>
        <label>Dificultad</label>
        <div>{renderStars()}</div>
        <div><p>{activityState.difficulty === 0 ? '(Debe indicar la dificultad)' : errors.difficulty}</p></div>
                <label >Duración</label>
        <input name='duration' onChange={handleChange} type="text" placeholder="Indicar la duracion en horas" />
        <div><p>{errors.duration}</p></div>
        <label>Temporada</label>
        <select onChange={handleChange} name="season">
          {renderSeasonOptions()}
        </select>
        <label >Paises</label>
        <select onChange={handleChange} name="countries" id="" >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <div><p>{errors.countries}</p></div>
        </select>
        <input disabled={disabledFuntion()} type="submit" />
      </form>
    </div>
  )
}


export default Create