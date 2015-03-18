angular.module('compUSA', [])

.controller('mainController', function() {

	var vm = this;

	vm.title = 'Welcome to Comp USA!';

	vm.computers = [
		{name: 'Toshiba', color: 'Black', ram: 64},
		{name: 'Dell', color: 'Black', ram: 64},
		{name: 'Fujitsu', color: 'Silver', ram: 64}
	];

	vm.computerData = {};

	vm.addComputer = function() {

		vm.computer.push({
			name: vm.computerData.name,
			name: vm.computerData.color,
			name: vm.computerData.ram
		});

		vm.computerData = {};
	};

});