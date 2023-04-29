const { pool } = require("../database.js");

/*Muestra todos los usuarios */
const getAll = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Vehiculos");
    res.json(rows);
  } catch (error) {
    console.error("Error: ", error);
    return res
      .status(500)
      .json({ message: "Ocurrio un error al procesar la solicitud" });
  }
};

/*Muestra unicamente un usuario y recibe el nombre como parametro para encontrarlo */
const getOne = async (req, res) => {
  try {
    const { matricula } = req.params;

    const [rows] = await pool.query(
      "SELECT * FROM Vehiculos WHERE matricula = ?",
      [matricula]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Vehiculo no Encontrado" });
    }
    res.json(rows);
  } catch (error) {
    console.error("Error: ", error);
    return res
      .status(500)
      .json({ message: "Ocurrio un error al procesar la solicitud" });
  }
};

/*Crea un Usuario */
const createAuto = async (req, res) => {
  try {
    const { matricula, chasis, marca, annio, color, tipo_v, modelo_v} = req.body;

    const [rows] = await pool.query(
      "INSERT INTO Vehiculos (matricula, chasis, marca, annio, color, tipo_v, modelo_v) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [matricula, chasis, marca, annio, color, tipo_v, modelo_v]
    );

    res.status(201).json({ message: "Vehiculo Creado" });
  } catch (error) {
    console.error("Error: ", error);
    return res
      .status(500)
      .json({ message: "Ocurrio un error al procesar la solicitud" });
  }
};

/**Edita un Vehiculo y recibe como parametro el nombre del Usuario */
const editAuto = async (req, res) => {
  try {
    const { matricula } = req.params;
    const { nuevaMatricula, color } = req.body;

    const [result] = await pool.query(
      "UPDATE Vehiculos SET matricula = IFNULL(?, matricula), color = IFNULL(?, color) WHERE matricula = ?",
      [nuevaMatricula, color, matricula]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Vehiculo no encontrado" });
    } else {
      res.json({ message: "Datos Guardados" });
    }

    // const [rows] = await pool.query("SELECT idUsuario, nombre, email, password, fechaCreacion, rol_id FROM Usuarios WHERE nombre = ? ", [nuevoNombre]);
  } catch (error) {
    console.error("Error: ", error);
    return res
      .status(500)
      .json({ message: "Ocurrio un error al procesar la solicitud" });
  }
};

/**Elimiona un usuario por su nombre */
const deleteAuto = async (req, res) => {
  try {
    const { matricula } = req.params;

    const [rows] = await pool.query("DELETE FROM Vehiculos WHERE matricula = ?", [
      matricula,
    ]);

    if (rows.affectedRows === 0) {
      return res.status(404).json({ message: "Vehiculo no encontrado" });
    } else {
      res.status(204).json({ message: "Vehiculo Eliminado" });
    }
  } catch (error) {
    console.error("Error: ", error);
    return res
      .status(500)
      .json({ message: "Ocurrio un error al procesar la solicitud" });
  }
};

module.exports.AutoServices = {
  getAll,
  getOne,
  createAuto,
  editAuto,
  deleteAuto,
};
