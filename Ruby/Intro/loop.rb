# x = 1
# loop do
#     x += 1
#     next unless (x%2) == 0
#         puts x
#     break if x >= 10
# end


# -----------------------------------------------
# y = 1
# while y <= 10
#     y += 1
#     next unless (y%2) == 0
#         puts y
# end

# -----------------------------------------------

# a = 1
# until a >= 10
#     a += 1
#     next unless (a % 2) == 0
#         puts a
# end

# -----------------------------------------------

# numbers = [1, 2, 3, 4, 5]
# for number in numbers do
#     puts number
# end

# groceries = ["bananas", "sweet potatoes", "pasta", "tomato"]
# for grocery in groceries do
#     puts grocery
# end

# -----------------------------------------------

groceries = ["bananas", "sweet potatoes", "pasta", "tomato"]

(0..5).each do |i|
    puts "# #{i}"
end

# groceries.each do |food|
#     puts "Get some #{food}"
# end