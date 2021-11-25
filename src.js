let operaciones = [];
let balance = 0;
let metaAhorro = 0;

const registrarOperacion = (monto, tipo, categoria, fecha) => {

    monto = parseInt(monto);

    operaciones.push({
        monto,
        tipo,
        categoria,
        fecha
    });

    if (tipo == "ingreso") {
        balance = monto + balance;
    } else {
        balance = balance - monto;
    }

    localStorage.setItem("operaciones", JSON.stringify(operaciones));
    localStorage.setItem("balance", JSON.stringify(balance));

}

const registrarMetaAhorro = (meta) => {

    metaAhorro = meta;

    localStorage.setItem("metaAhorro", JSON.stringify(metaAhorro));
}

const estaMiMetaCumplida = () => {

    balance = parseInt(localStorage.getItem("balance"));
    metaAhorro = parseInt(localStorage.getItem("metaAhorro"));

    if (metaAhorro < balance) {
        return "cumple";
    } else {
        return "no cumple";
    }
}

module.exports.registrarOperacion = registrarOperacion;
module.exports.registrarMetaAhorro = registrarMetaAhorro;
module.exports.estaMiMetaCumplida = estaMiMetaCumplida;