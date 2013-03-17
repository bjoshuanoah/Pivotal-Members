// API Token: 353ddbae79fe8b53ddb36fbe5f389e68


var api_token = '353ddbae79fe8b53ddb36fbe5f389e68';

$.ajax({
	type: 'GET',
	url: 'http://imac.local:3000/projects',
	beforeSend: function(xhr){
		xhr.setRequestHeader('api_token', api_token);
	},
	// datatype: 'json',
	error: function (e) {
		console.log('error', e);
		console.log(e.responseText);
		console.log(e.statusText);
		console.log(e.status);
	},
	success: function (s) {
		console.log('success', s);
	}
});

$.ajax({
	type: 'GET',
	url: 'http://imac.local:3000/members',
	beforeSend: function(xhr){
		xhr.setRequestHeader('api_token', api_token);
	},
	// datatype: 'json',
	error: function (e) {
		console.log('error', e);
		console.log(e.responseText);
		console.log(e.statusText);
		console.log(e.status);
	},
	success: function (s) {
		console.log('success', s);
	}
});

$.ajax({
	type: 'GET',
	url: 'http://imac.local:3000/iterations',
	beforeSend: function(xhr){
		xhr.setRequestHeader('api_token', api_token);
	},
	// datatype: 'json',
	error: function (e) {
		console.log('error', e);
		console.log(e.responseText);
		console.log(e.statusText);
		console.log(e.status);
	},
	success: function (s) {
		console.log('success', s);
	}
});

$.ajax({
	type: 'GET',
	url: 'http://imac.local:3000/done_iterations',
	beforeSend: function(xhr){
		xhr.setRequestHeader('api_token', api_token);
	},
	// datatype: 'json',
	error: function (e) {
		console.log('error', e);
		console.log(e.responseText);
		console.log(e.statusText);
		console.log(e.status);
	},
	success: function (s) {
		console.log('success', s);
	}
});

$.ajax({
	type: 'GET',
	url: 'http://imac.local:3000/current_iterations',
	beforeSend: function(xhr){
		xhr.setRequestHeader('api_token', api_token);
	},
	// datatype: 'json',
	error: function (e) {
		console.log('error', e);
		console.log(e.responseText);
		console.log(e.statusText);
		console.log(e.status);
	},
	success: function (s) {
		console.log('success', s);
	}
});