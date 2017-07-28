function checkFieldType(fieldType) {
	// /^\w:\w$/.test(fieldType)
	const isValid = /^\w+:\w+$/.test(fieldType)
	return isValid
}

module.exports = checkFieldType;
