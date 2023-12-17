
const Trim = () => {
    const input = document.querySelector('#ZuTrennenInput').value
    const sollWeg = document.querySelector('#WasWegSoll').value
    const davorWeg = document.querySelector('#DavorTrennen').checked
    const danachWeg = document.querySelector('#DanachTrennen').checked
    const outputDavor = document.querySelector('#outputVor')
    const outputDanach = document.querySelector('#outputDanach')

    let getIndex = input.indexOf(sollWeg)
    let ergebnisDavor1 = input.slice(0, getIndex)
    let ergebnisDavor2 = input.slice(getIndex)
    let ergebnisDanach1 = input.slice(0, getIndex + sollWeg.length)
    let ergebnisDanach2 = input.slice(getIndex + sollWeg.length)


        if (davorWeg){
            outputDavor.innerHTML = ergebnisDavor1
            outputDanach.innerHTML = ergebnisDavor2
        }

        else if (danachWeg){
            outputDavor.innerHTML = ergebnisDanach1
            outputDanach.innerHTML = ergebnisDanach2
        }
        else {
            outputDavor.innerHTML = 'ERROR'
            outputDanach.innerHTML = 'ERROR'
        }
}