import { createSignal } from "solid-js";
export default function Forms(props) {
    const [secondNumber, setSecondNumber] = createSignal();

    function submit(event) {
        event.preventDefault();
        const fromData = new FormData(event.target);
        const number = FormData.get("number");
        //console.log("Upisali ste broj: " + number);
        setSecondNumber(number);
    }

    return (
        <div>
            <from onSubmit={submit}>
                <input type="tex" name="number" />
                <input type="submit" value="Potvrdi" />
            </from>

            <input type="number" value={secondNumber()} onInput={(event) => setSecondNumber(event.target.value)} />

            <div>Drugi broj je {secondNumber()} </div>
        </div>
    );
}
	
