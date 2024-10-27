import { createSignal } from "solid-js";
export default Kalkulator;
import "./kalkulator.css";
import voda from "./assets/slika.png";

function Kalkulator() {
  const [tekucaVoda, setTekucaVoda] = createSignal(0);
  const [vodaAparat, setVodaAparat] = createSignal(0);

  
  const [ukupnoMjesecno, setUkupnoMjesecno] = createSignal(0);
  const [dnevnaPotrosnja, setDnevnaPotrosnja] = createSignal(0);

  const [error, setError] = createSignal("");

  const handleInput = (value, setValue) => {
    const broj = parseFloat(value);

    if (isNaN(broj) || broj <= 0) {
      setError("Unesite broj veći od nule!");
      setValue(0);
    } else {
      setError("");
      setValue(broj);
    }
  };

  const izracunajPotrosnju = () => {
    const ukupno = parseFloat(tekucaVoda()) + parseFloat(vodaAparat());
    const dnevna = ukupno / 30; 

    setUkupnoMjesecno(ukupno);
    setDnevnaPotrosnja(dnevna);
  };

  return (
    <>
      <img src={voda} alt="slika" width="150" height="150" />
      <div style={{ "text-align": "center", padding: "20px" }}>
        <h1>Kalkulator potrošnje vode</h1>

        <div>
          <label>
            Potrošnja tekuće vode (L mjesečno):
            <input
              type="number"
              value={tekucaVoda()}
              onInput={(e) => handleInput(e.target.value, setTekucaVoda)}
            />
          </label>
        </div>

        <div>
          <label>
            Potrošnja vode iz aparata (L mjesečno):
            <input
              type="number"
              value={vodaAparat()}
              onInput={(e) => handleInput(e.target.value, setVodaAparat)}
            />
          </label>
        </div>

        {error() && <p style={{ color: "red" }}>{error()}</p>} {}

        <button onClick={izracunajPotrosnju}>Izračunaj</button>

        <h2>Rezultati</h2>
        <p>Ukupna mjesečna potrošnja vode: {ukupnoMjesecno()} L</p>
        <p>Dnevna potrošnja vode: {dnevnaPotrosnja().toFixed(2)} L</p>
      </div>
    </>
  );
}

