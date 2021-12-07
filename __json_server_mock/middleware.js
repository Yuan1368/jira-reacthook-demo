module.exports = (req, res, next) => {
	if (req.method == "POST" && req.path == "/login") {
		if (req.body.username === "username" && req.body.password === "123456") {
			return res.status(200).json({
				user: {
					token: "123"
				}
			})
		}
		else {
			return res.status(400).json({message: "该用户不存在"});
		}
	}else{
		return res.status(400).json({message:"请求失败"});
	}

	next();
}