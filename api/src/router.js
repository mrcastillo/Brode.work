import path from "path";

class AppRouter{
    constructor(app){
        this.app = app;
        this.setupRouters();
    }

    setupRouters(){
        const app = this.app;
        const db = app.get("db");


        app.post("/sendform", (req, res) => {
            res.status(200).json({
                payload: "Homepage"
            });
            console.log(req.body)
        });
    }
}


export default AppRouter;