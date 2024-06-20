import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    });