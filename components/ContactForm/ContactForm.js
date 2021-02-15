import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.scss";

const ContactForm = ({ ref }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className={styles.container} ref={ref}>
      <div className={styles.text_container}>
        <h3>¿Tenés alguna duda o consulta?</h3>
        <p>
          ¡Contactanos! Nuestro equipo siempre está abierto a resolver tus dudas
          o atender tus necesidades.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
        <div className={styles.top_form_container}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              ref={register({ required: true })}
            />
          </div>

          <div>
            <label htmlFor="email">Correo electronico</label>
            <input
              type="text"
              name="email"
              id="email"
              ref={register({ required: true })}
            />
          </div>
        </div>

        <label htmlFor="inquiry">Consulta</label>
        <textarea
          rows="5"
          cols="40"
          name="inquiry"
          id="inquiry"
          ref={register({ required: true })}
        />

        <input type="submit" value="Enviar" />
      </form>
    </section>
  );
};

export default ContactForm;
