
export const FormContact = () => {

    const sendForm = () => {
        swal({
            title: 'Tu consulta fue enviada',
            text: "Gracias por Contactarte",
            icon: "success"
        })
    }

    return (
        <>
            <section className="sectionForm" id="contacto" >
                <h2 className="titleForm">Contactarme</h2>
                <p className="subtitleForm">¡Hola! Si estás buscando un desarrollador frontend de alta calidad, has venido al lugar correcto.
                    Si queres contratar alguno de mis servicios o tienes alguna propuesta laboral,
                    no dudes en contactarme completando el formulario y a la brevedad me estare contactando.</p>
            </section>




            <div className="form-contact animate__animated animate__backInLeft">
                <div className="content">
                    <div className="contact-wrapper">
                        <div className="contact-form bg-dark">
                            <form onSubmit={sendForm} action="https://formsubmit.co/maikolreyes209@gmail.com" method="POST">
                                <p>
                                    <label htmlFor="name">Nombre</label>
                                    <input required type="text" name="Nombre" id="name" />
                                </p>
                                <p>
                                    <label htmlFor="email">Correo Electrónico</label>
                                    <input required type="email" name="Gmail" id="email" />
                                </p>
                                <p>
                                    <label htmlFor="telefono">Teléfono</label>
                                    <input required type="number" name="Telefono" id="telefono" />
                                </p>
                                <p>
                                    <label htmlFor="asunto">Asunto</label>
                                    <input required type="text" name="Asunto" id="asunto" />
                                </p>
                                <p className="block">
                                    <label htmlFor="mensajes">Mensaje</label>
                                    <textarea required name="Mensaje" id="Mensaje" cols="50" rows="3"></textarea>
                                </p>
                                <p className="block">
                                    <button type="submit">Enviar</button>
                                    <input type="hidden" name="_next" value="http://127.0.0.1:5173/formContact" />
                                    <input type="hidden" name="_captcha" value='false' />
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}