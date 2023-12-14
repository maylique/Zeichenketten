
const Trim = () => {
    const input = document.querySelector('#ZuTrennenInput').value
    const sollWeg = document.querySelector('#WasWegSoll').value
    const davorWeg = document.querySelector('#DavorTrennen').checked
    const danachWeg = document.querySelector('#DanachTrennen').checked
    const outputDavor = document.querySelector('#outputVor')
    const outputDanach = document.querySelector('#outputDanach')

    let ergebnis = input.indexOf(sollWeg)

        if (davorWeg){
            outputDavor.innerHTML = ergebnis.slice(input)
        }
        else {
            outputDavor.innerHTML = 'ERROR'
        }
}