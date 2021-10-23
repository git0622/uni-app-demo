'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('eventjjjjjjjjjjjjjjjjjjjj : ', event)
	let db = uniCloud.database();

	// let res = await db.collection("classInfo").doc('61727389c0cd1a0001a64c38').get();
	let res = await db.collection("classInfo").doc(event._id).get();
	//返回数据给客户端
	return {
		data: res.data
	}
};
