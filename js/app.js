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

		vm.computers.push({
			name: vm.computerData.name,
			color: vm.computerData.color,
			ram: vm.computerData.ram
		});

		vm.computerData = {};
	};

});