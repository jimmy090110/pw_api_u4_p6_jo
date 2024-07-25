import axios from "axios";

//Métodos de consumo del API

const obtenerPorCedulaAxios = async (cedula) => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}/cedula`).then(r => r.data);
    console.log(data);
    return data;
}

const guardar = async (estudianteBody) => {
    const data = axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`, estudianteBody).then(r => r.data);
    console.log(data);
    return data;
}

const actualizar = async (cedula, estudianteBody) => {
    const data = axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`, estudianteBody).then(r => r.data);
    console.log(data);
    return data;
}

const eliminar = async (cedula) => {
    const data = axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.data);
    console.log(data);
    return data;
}

//Métodos Fachada

export const obtenerPorCedulaAxiosFachada = async (cedula) => {
    return await obtenerPorCedulaAxios(cedula);
}

export const guardarFachada = async (estudianteBody) => {
    return await guardar(estudianteBody);
}
export const actualizarFachada = async (cedula, estudianteBody) => {
    return await actualizar(cedula, estudianteBody);

}
export const eliminarFachada = async (cedula) => {
    return await eliminar(cedula);
}
