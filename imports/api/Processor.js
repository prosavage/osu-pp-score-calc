

export default class Processor {

    static doShit(string) {
        const lines = string.split("\n");
        const scores = [];
        let counter = 0;
        for (i = 2; i < lines.length; i+=4) {
            scores[counter] = parseInt(lines[i].replace("pp", ""));
            counter++;
        }
        let pp = 0;
        for (i = 0; i < scores.length; i++) {
            let val = parseInt(scores[i]) * (Math.pow(0.95, i));
            console.log(val);
            pp += val;
        }
        pp = parseInt(pp);
        document.getElementById("result").innerText = "Your PP without the bonus is " + pp;
    }



}

