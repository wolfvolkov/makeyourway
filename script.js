(function(){
  window.App = {
    Models:{},
    Views: {},
    Collections: {}
  };
  
  window.template = function(id){
    return _.template($('#'+id).html());
  };



  App.Models.Block = Backbone.Model.extend({
    defaults: {
      PATH_STEP_ID: "248",
      STEP: "СУБД",
      STEP_ID: "89",
      X_AXIS: "40",
      Y_AXIS: "49"
    }
  });
  App.Collections.Blocks = Backbone.Collection.extend({
    model: App.Models.Block
  });

  App.Views.bModel = Backbone.View.extend({
    tagName: "div",
    className: "model",
    initialize: function(){
      
    },
    render: function(){
      this.collection.each(function(block){
        var blockView = new App.Views.Block({model:block});
        this.$el.append(blockView.render().el);

      },this);
      return this;  
    }
  });


  App.Views.Block = Backbone.View.extend({
    tagName: 'div',
    className: 'block',
    template:template('block-id'),
    initialize: function(){
      this.render();
    },
    render: function (){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  var blockCollection = new  App.Collections.Blocks();
  var blokcs,lines;
    $.getJSON('test.json', function(json) {
      blocks = json[0];
      blockCollection.add(blocks);
      var modelView = new App.Views.bModel({collection:blockCollection});
      $('body').append(modelView.render().el);
    });

  var block = new App.Models.Block();

}());