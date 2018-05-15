require_relative "human"
require_relative "smart"

module Animal
    def make_sound
        puts "Grrrrr"
    end
end

class Dog
    include Animal
end

class Scientist
    include Human
    prepend Smart

    def act_smart
        return "xxkxkxk"
    end
end

rover = Dog.new
rover.make_sound

einstein = Scientist.new
einstein.name = "Albert"

puts einstein.name
einstein.run
puts einstein.name + " says " + einstein.act_smart

