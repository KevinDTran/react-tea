import model from './model';

model.on('counter:increment', function(counter,address) {
  // fetch('/some/url', {
  // 	method: 'GET',
  //   headers: new Headers({
	// 	    'Accept': 'application/json'
	//   })
  // }).then(function(response) {
  // 	
  // }).catch(function(err) {
  // 	// Error :(
  // });
  model.get().counters.set(address,  counter + 1);
});

model.on('counter:decrement', function(counter,address) {
  model.get().counters.set(address,  counter - 1);
});

model.on('counter:add', function() {
  model.get().counters.push(0);
});

model.on('counter:delete', function(address) {
  model.get().counters.splice(address, 1)
});
