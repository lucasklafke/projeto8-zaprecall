export default function InitialPage(setScreen){
    return (
        <div className="InitialPage"> 
            <div className="ZapDiv">
                <img src="assets/logo.png" alt="ZapRecall" />
                <h1>ZapRecall</h1>
            </div>
            <div onClick={() => setScreen(false)}>
                <button >Iniciar Recall!</button>
            </div>
        </div>
    )
}