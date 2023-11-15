"use strict";

const { API_KEY } = require("../../config");


/**
 * API to activate user
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {function} next 
 */
const activateUser = async (req, res, next) => {
	try {
		const params = req.params;

		if (params?.key !== API_KEY) {
			return res.response({ message: 'failure', display_message: "Invalid NB key" }, 200);
		}

		return res.response({
			message: "size2",
			user: [
				{
					username: "Madddy#2442",
					ip: params?.ip,
					client: "508170412874661889",
					size1: "10",
					size2: "9",
					size3: "8",
					refresh: "5",
					status: "inactive",
					blackList: [],
					_id: "6470c5eb36bbd1ea7867e0bf",
					key: params?.key,
					__v: 0
				}
			]
		});
	} catch (error) {
		return next({ error, statusCode: 500, message: error?.message });
	}
};

/**
 * API to verify user
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {function} next 
 */
const verifyUser = async (req, res, next) => {
	try {
		const params = req.params;
		if (params?.key !== API_KEY) { return res.response({ message: 'failure' }, 200); }

		return res.response({
			message: "size1",
			user: {
				username: "Madddy#2442",
				ip: params?.ip,
				client: "508170412874661889",
				size1: "10",
				size2: "9",
				size3: "8",
				refresh: "5",
				status: "inactive",
				blackList: [],
				_id: "6470c5eb36bbd1ea7867e0bf",
				key: params?.key,
				__v: 0
			}
		});
	} catch (error) {
		return next({ error, statusCode: 500, message: error?.message });
	}
};

/**
 * API to add blacklist
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {function} next 
 */
const addBlacklist = async (req, res, next) => {
	try {
		const request = req.body;
		if (request?.key !== API_KEY) { return res.response({ message: 'failure' }, 200); }

		return res.response({
			message: "success",
			user: {
				username: "Madddy#2442",
				ip: request?.ip,
				client: "508170412874661889",
				size1: "10",
				size2: "9",
				size3: "8",
				refresh: "5",
				status: "inactive",
				blackList: [ request.link ],
				_id: "6470c5eb36bbd1ea7867e0bf",
				key: request?.key,
				__v: 3
			}
		});
	} catch (error) {
		return next({ error, statusCode: 500, message: error?.message });
	}
};

/**
 * API to fetch blacklist
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {function} next 
 */
const fetchBlacklist = async (req, res, next) => {
	const params = req.params;
	if (params?.key !== API_KEY) { return res.response({ message: 'failure' }, 200); }
	try {
		return res.response({
			message: "success",
			blackList: [ ]
		});
	} catch (error) {
		return next({ error, statusCode: 500, message: error?.message });
	}
};

/**
 * API to remove blacklist
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {function} next 
 */
const removeBlacklist = async (req, res, next) => {
	try {
		const request = req.body;
		if (request?.key !== API_KEY) { return res.response({ message: 'failure' }, 200); }

		return res.response({
			message: "success",
			user: {
					username: "Madddy#2442",
					ip: "103.72.143.229",
					client: "508170412874661889",
					size1: "10",
					size2: "9",
					size3: "8",
					refresh: "5",
					status: "inactive",
					blackList: [request.link],
					_id: "6470c5eb36bbd1ea7867e0bf",
					key: request?.key,
					__v: 7
			}
		});
	} catch (error) {
		return next({ error, statusCode: 500, message: error?.message });
	}
};

/**
 * API to read hashes
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {function} next 
 */
const readHashes = async (req, res, next) => {
	try {
		return res.response({
			message: "success",
			refresh_hashes: [
					"/Tqay3INVklhL/rhdbANVhoc5e3X5U`2oAjnPV.WMULiF.vLxHyM2jiLw@CL2HSN1LiM1@SL",
					"7Pj4,jksB4`phhmnFjvn/3ViVTs^aQ@anTK`X@.fHcN7F.@L4DCM1DSMwbSN4bSL2LiM1@SL",
					"HLHXs4`h^dg@oDTmGQ5YaYo0QrX6LM5GNxnIyP.VH,KRF.@N0PiMvDCNwPCM2HiL2LiM1@SL",
					"jVC5e^p/og0EpU2r3@1QDcX@En3ALvQ8NXIRFC.4VtmpF.PM1byL2PSL2PyLyLyL2LiM1@SL",
					"jjoHt@Q3FhUUatKJxfgGMGCpfMm54X6v/MvwSR.rt7GUF.@M4PCLwfSL/fyL1jyL2LiM1@SL",
					"j`X1E75753GqGxUOnIYF3AQXsmLRFxTso,jgMs.jcmqQF.@LyfyLyDCM0PCMxTyMyXSN1@SL",
					"PUXIrPf1Tj,b4yeUnvaGBEHQcIsri4DePinYUk.Qc^QRF.@M2DSMwPiMvTCM/HCL/XSN1@SL",
					"DSevAV/umCessfusrUQyBgyGoCt8By5C4fRkoh.i6nTDF.@NvTSN/@iM2@CL2DSL/XSN1@SL",
					"LFuE3cKv^ascukCVvbeQgvVG0kWIkA`Vx3Wmsg.rouMQF.PMyjyL/bSL1jCLyDiL/XSN1@SL",
					"XP2,FDu5q8Q`,gpqAJnstI23fbP60q7aBN@VLv.ntTJUF.@N1XCN/fSN1@SNvTiL/XSN1@SL"
			]
		});
	} catch (error) {
		return next({ error, statusCode: 500, message: error?.message });
	}
};


module.exports = {
	activateUser,
	verifyUser,
	addBlacklist,
	fetchBlacklist,
	removeBlacklist,
	readHashes,
};