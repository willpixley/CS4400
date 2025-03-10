export async function testController(req, res) {
	return res.status(200).json({
		message: 'Everything is working',
	});
}
