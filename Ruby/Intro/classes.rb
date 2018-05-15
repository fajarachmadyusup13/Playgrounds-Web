# class Animal
#     def initialize
#         puts "Creating a New Animal"
#     end

#     def set_name(new_name)
#         @name = new_name
#     end

#     def get_name
#         @name
#     end
    
#     def name
#         @name
#     end
    
#     def name=(new_name)
#         if new_name.is_a?(Numeric)
#             puts "Name Can't Be a Number"
#         else
#             @name = new_name
#         end
#     end
# end

# cat = Animal.new
# cat.set_name("Booo")
# puts cat.get_name

# puts cat.name

# cat.name = "Sophie"
# puts cat.get_name

# -----------------------------------------------

# class Dog
#     attr_accessor :name, :height, :weight

#     def bark
#         return "Generic Bark"
#     end
# end

# class GermanSheperd < Dog
#     def bark
#         return "Loud Bark"
#     end
# end

# rover = Dog.new
# rover.name = "Rover"
# puts rover.name

# max = GermanSheperd.new
# max.name = "Max"
# printf "%s goes %s \n", max.name, max.bark()

# -----------------------------------------------

class Bird
    def tweet(bird_type)
        bird_type.tweet
    end
end

class Cardinal < Bird
    def tweet
        puts "Tweet twet"
    end
end

class Parrot < Bird
    def tweet
        puts "Squawk"
    end
end


generic_bird = Bird.new
generic_bird.tweet(Cardinal.new)
generic_bird.tweet(Parrot.new)
