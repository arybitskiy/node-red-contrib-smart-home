var cxml = require("cxml");
var Primitive = require('../../xml-primitives');

cxml.register('https://github.com/OpenZWave/open-zwave', exports, [
	[Primitive, ['string'], []]
], [
], [
	[0, 0, [[6, 0], [12, 0], [13, 0], [14, 0], [27, 0], [28, 0], [29, 0]], []],
	[0, 0, [], [[15, 0], [21, 0]]],
	[0, 0, [[6, 3], [13, 3], [14, 3], [27, 3], [28, 3]], []],
	[0, 0, [], [[1, 1], [7, 1], [16, 0], [22, 0]]],
	[0, 0, [[29, 3]], [[2, 1], [8, 1], [17, 0], [23, 0]]],
	[0, 0, [], [[4, 1], [10, 1], [19, 0], [25, 0]]],
	[0, 0, [], [[5, 1], [11, 1], [20, 0], [26, 0]]],
	[0, 0, [], [[3, 1], [9, 1], [18, 0], [24, 0]]]
], [
	['basic', [1], 0],
	['basic', [1], 0],
	['basic', [1], 0],
	['basic', [1], 0],
	['basic', [1], 0],
	['Basic', [2], 0],
	['command_classes', [1], 0],
	['command_classes', [1], 0],
	['command_classes', [1], 0],
	['command_classes', [1], 0],
	['command_classes', [1], 0],
	['DeviceClasses', [3], 0],
	['DeviceType', [4], 0],
	['Generic', [5], 0],
	['key', [1], 0],
	['key', [1], 0],
	['key', [1], 0],
	['key', [1], 0],
	['key', [1], 0],
	['key', [1], 0],
	['label', [1], 0],
	['label', [1], 0],
	['label', [1], 0],
	['label', [1], 0],
	['label', [1], 0],
	['label', [1], 0],
	['NodeType', [6], 0],
	['Role', [7], 0],
	['Specific', [8], 0]
]);