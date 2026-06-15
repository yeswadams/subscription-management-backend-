import { Router} from "express";

// instantiate the route
const userRouter = Router();

userRouter.get("/", (req, res) => res.send({ title: "GET all users" }));
userRouter.get("/user/:id", (req, res) => res.send({ title: "GET subscription of a specific user" }));
userRouter.get("/upcoming-renewals", (req, res) => res.send({ title: "GET upcoming renewals" }));

userRouter.get("/:id", (req, res) => res.send({ title: "GET user details" }));

userRouter.post("/", (req, res) => res.send({ title: "CREATE user details" }));

userRouter.put("/:id", (req, res) => res.send({ title: "CREATE user details" }));
userRouter.put("/:id/cancel", (req, res) => res.send({ title: "CANCEL user details" }));

userRouter.delete("/:id", (req, res) => res.send({ title: "CREATE user details" }));

export default userRouter;

