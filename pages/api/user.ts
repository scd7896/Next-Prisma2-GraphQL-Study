import { NextApiRequest, NextApiResponse } from "next";
import { UserController } from "controller";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
	if (_req.method === "GET") {
		try {
			// const userNum = _req.headers.authorization;
			// if (!userNum) {
			// 	return res.status(401).json({ status: "fail", message: "유저 정보가 없습니다" });
			// }
			const user = await UserController.findByEmail(1);

			res.status(200).json({ status: "success", payload: user });
		} catch (err) {
			res.status(500).json({ status: "error", message: "데이터베이스 오류" });
		}
	}

	if (_req.method === "POST") {
		try {
			const user = await UserController.userPost({ ..._req.body });
			res.status(200).json({ status: "success", payload: user });
		} catch (err) {
			console.log(err);
			res.status(500).json({ status: "error", message: "데이터베이스 오류" });
		}
	}
};

export default handler;
