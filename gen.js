#!/usr/bin/env node

var program = require('commander');
var creator = require('./creator');
var checkFieldType = require('./utils/checkFieldType')

program.version('0.1.0')
if (!process.argv.slice(2).length) {
  program.outputHelp()
}

program
	.command('new <name>')
	.description('create an airapi service')
	.action(function() {
		const projectName = process.argv[3]
		creator(projectName)
	})

program
	.command('generate <model> <field:type>')
	.alias('g')
	.description('create a model')
	.action(function() {
		const model = process.argv[3]
		const fieldTypes = process.argv.slice(4, process.argv.length)
		const schema = {}
		fieldTypes.forEach((fieldType) => {
			if (checkFieldType(fieldType)) {
				const splitFiledType = fieldType.split(':')
				const key = splitFiledType[0]
				const type = splitFiledType[1]
				schema[key] = type
			} else {
				console.log(`invalid: ${fieldType} `)
			}
		})
		console.log(schema)
	})

program.parse(process.argv)
