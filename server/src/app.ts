// import express from "express";
// import cors from "cors";
// import helmet from "helmet";
// import userRoutes from "./routes/auth.routes";
// import { notFound } from "./middlewares/notFound.middleware";
// import { errorHandler } from "./middlewares/error.middleware";

// const app = express();

// app.use(helmet());
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// app.use("/api/users", userRoutes);

// app.use(notFound);
// app.use(errorHandler);

// export default app;


import express from "express";
import authRoutes from "./routes/auth.routes";

const app = express();

// JSON body read karne ke liye
app.use(express.json());

// Auth routes
app.use("/api/auth", authRoutes);

export default app;
