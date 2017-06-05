app.service('androidTestFeedService', function(){
  var belongsTo;
  return {
    getBelongsTo: function() {return belongsTo;},
    setBelongsTo: function(value){belongsTo=value}
  };
});
