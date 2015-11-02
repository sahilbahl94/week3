class Order 

	def initialize 
	@food = "Pizza"
	@ingredients = ["tomato", "mozzarella"]
	end

	def submit_order
		puts("Submitted #{@food}")
		puts("Ingredients: ")
		@ingredients.each do |single_ingredient|
		puts ("#{single_ingredient}")

end

order = Order.new
