class ModelBlock extends Backbone.Model
	initialize:->
		alert "hello"
	defaults:
		position:
			top:0
			left:0

# modelBlock = new ModelBlock position:
# 								top: 10
# 								left: 20

# console.log modelBlock
# console.log modelBlock.toJSON()


class ModelBlockView extends Backbone.View
	initialize:->
		@model.on 'someEvent', @doThis
	doThis: =>
		# console.log this.get 'position'


modelBlock = new ModelBlock
modelView = new ModelBlockView model: modelBlock
modelBlock.set 'color':'red'
pos = modelBlock.get 'position'
console.log pos.top
console.log modelBlock.get 'color'
console.log modelBlock.defaults

modelBlock.trigger 'someEvent'